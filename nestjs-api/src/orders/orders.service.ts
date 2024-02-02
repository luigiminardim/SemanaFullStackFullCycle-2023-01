import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { In, Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private amqpConnection: AmqpConnection,
  ) {}

  async create(createOrderDto: CreateOrderDto & { client_id: number }) {
    const productIds = [
      ...new Set(createOrderDto.items.map((item) => item.product_id)),
    ];
    const products = await this.productRepository.findBy({
      id: In(productIds),
    });
    if (products.length !== productIds.length) {
      throw new Error(`Algum produto não existe.`);
    }
    const order = Order.create({
      client_id: createOrderDto.client_id,
      items: createOrderDto.items.map((item) => {
        const product = products.find((p) => p.id === item.product_id);
        return {
          product_id: item.product_id,
          quantity: item.quantity,
          price: product.price,
        };
      }),
    });
    const savedOrder = await this.orderRepository.save(order);
    await this.amqpConnection.publish('amq.direct', 'OrderCreated', {
      order_id: savedOrder.id,
      card_hash: createOrderDto.card_hash,
      total: savedOrder.total,
    });
    return savedOrder;
  }

  findAll(client_id: number) {
    return this.orderRepository.find({
      where: {
        client_id,
      },
    });
  }

  findOne(id: string, client_id: number) {
    return this.orderRepository.findOneOrFail({ where: { id, client_id } });
  }
}
