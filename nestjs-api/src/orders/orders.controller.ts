import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @Req() req: Request) {
    const client_id = req['user'].sub as string;
    return this.ordersService.create({
      ...createOrderDto,
      client_id: +client_id,
    });
  }

  @Get()
  findAll(@Req() req: Request) {
    const client_id = req['user'].sub as number;
    return this.ordersService.findAll(client_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    const client_id = req['user'].sub as number;
    return this.ordersService.findOne(id, client_id);
  }
}
