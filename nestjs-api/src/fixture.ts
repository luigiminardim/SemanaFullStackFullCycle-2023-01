import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert(products);
  await app.close();
}

bootstrap();

const products = [
  {
    id: 'a3c29da2-e633-4674-a86e-94331f299ee5',
    name: 'Bouq All Italian - Primerba',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 909.26,
    image_url: 'http://dummyimage.com/201x142.png/dddddd/000000',
  },
  {
    id: '45ac5cd6-8f08-4330-8465-769a171857cc',
    name: 'Hersey Shakes',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 923.13,
    image_url: 'http://dummyimage.com/113x155.png/dddddd/000000',
  },
  {
    id: '3f2fa0f6-f24b-4bba-abad-1c7eb6d61141',
    name: 'Syrup - Golden, Lyles',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 523.04,
    image_url: 'http://dummyimage.com/108x141.png/dddddd/000000',
  },
  {
    id: '6b34d664-ebfa-4971-9ee1-f748f9ce2fec',
    name: 'Chips - Doritos',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 267.44,
    image_url: 'http://dummyimage.com/124x160.png/5fa2dd/ffffff',
  },
  {
    id: '8b7f76a1-e0e0-4e10-8e3c-da557af3f00d',
    name: 'Pepperoni Slices',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 541.1,
    image_url: 'http://dummyimage.com/186x199.png/cc0000/ffffff',
  },
  {
    id: '1ce8bb6e-d4e8-4a0a-8cdf-e0cab8bd896d',
    name: 'Yogurt - French Vanilla',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 432.28,
    image_url: 'http://dummyimage.com/151x103.png/cc0000/ffffff',
  },
  {
    id: 'c7632bec-02a2-45db-b5ac-1fc8b0bc0bfb',
    name: 'Cocoa Powder - Dutched',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 967.71,
    image_url: 'http://dummyimage.com/241x212.png/dddddd/000000',
  },
  {
    id: '083c3934-1a77-4540-a16f-4214eb12e000',
    name: 'Marzipan 50/50',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 693.21,
    image_url: 'http://dummyimage.com/143x221.png/cc0000/ffffff',
  },
  {
    id: 'd374736f-ed78-416a-9b77-4f373ef690ea',
    name: 'Pork - Caul Fat',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 6.13,
    image_url: 'http://dummyimage.com/174x161.png/5fa2dd/ffffff',
  },
  {
    id: '0345d496-1975-48d6-91aa-0c4f110788d2',
    name: 'V8 - Berry Blend',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 554.01,
    image_url: 'http://dummyimage.com/239x204.png/5fa2dd/ffffff',
  },
  {
    id: '06b3bc91-eae3-43b0-a168-efb03425975f',
    name: 'Table Cloth 53x53 White',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 938.11,
    image_url: 'http://dummyimage.com/206x118.png/cc0000/ffffff',
  },
  {
    id: 'f2d89ad3-136b-4dfd-a133-6efd0039ff57',
    name: 'Walkers Special Old Whiskey',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 304.1,
    image_url: 'http://dummyimage.com/211x231.png/dddddd/000000',
  },
  {
    id: 'ebe6c550-d985-4bb3-b6cd-7c858003e979',
    name: 'Onions - Dried, Chopped',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 171.66,
    image_url: 'http://dummyimage.com/138x140.png/cc0000/ffffff',
  },
  {
    id: 'a8040d54-0e81-4714-8415-c8f8d180c4b4',
    name: 'Plaintain',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 547.08,
    image_url: 'http://dummyimage.com/122x181.png/ff4444/ffffff',
  },
  {
    id: 'b974e0fc-511a-4747-853e-d24120b9e207',
    name: 'Vermouth - Sweet, Cinzano',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 893.86,
    image_url: 'http://dummyimage.com/227x229.png/dddddd/000000',
  },
  {
    id: 'f441105b-f6cc-4377-a470-c38efeed8bd0',
    name: 'Veal - Leg, Provimi - 50 Lb Max',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 132.14,
    image_url: 'http://dummyimage.com/135x209.png/5fa2dd/ffffff',
  },
  {
    id: '9e01946f-d051-4c40-b9be-68824645aade',
    name: 'Swiss Chard - Red',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 712.1,
    image_url: 'http://dummyimage.com/169x178.png/cc0000/ffffff',
  },
  {
    id: '859c5bd9-381f-4cae-8dbc-697294d2ccd2',
    name: 'Beans - Navy, Dry',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 609.99,
    image_url: 'http://dummyimage.com/247x126.png/cc0000/ffffff',
  },
  {
    id: '91bb787d-6529-481f-b8a4-57af2f604aa8',
    name: 'Jolt Cola',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 985.96,
    image_url: 'http://dummyimage.com/131x134.png/5fa2dd/ffffff',
  },
  {
    id: '56ba52d2-f193-4646-83b7-5a4ef882deba',
    name: 'Compound - Rum',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 248.03,
    image_url: 'http://dummyimage.com/185x154.png/dddddd/000000',
  },
  {
    id: 'b7328d75-6e2c-4be8-a9ea-179d1254ae93',
    name: 'Macaroons - Homestyle Two Bit',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 281.52,
    image_url: 'http://dummyimage.com/206x141.png/ff4444/ffffff',
  },
  {
    id: 'f85c0dfa-6c92-4da6-b03a-d9064cd5e780',
    name: 'Sausage - Liver',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 144.81,
    image_url: 'http://dummyimage.com/125x214.png/5fa2dd/ffffff',
  },
  {
    id: '2abf067c-2315-4222-ab8f-d58a30166fbd',
    name: 'Yogurt - Peach, 175 Gr',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 402.9,
    image_url: 'http://dummyimage.com/153x163.png/5fa2dd/ffffff',
  },
  {
    id: 'e5e3edeb-782a-4588-b239-d746001ab9dd',
    name: 'Muffin Hinge - 211n',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 449.18,
    image_url: 'http://dummyimage.com/145x197.png/5fa2dd/ffffff',
  },
  {
    id: 'cfd91ba2-6b1c-4d74-8103-2154be257009',
    name: 'Cognac - Courvaisier',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 56.9,
    image_url: 'http://dummyimage.com/145x100.png/dddddd/000000',
  },
  {
    id: '96aa38a8-05c4-402b-934a-26ae14eb35a9',
    name: 'Mountain Dew',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 768.45,
    image_url: 'http://dummyimage.com/224x131.png/dddddd/000000',
  },
  {
    id: '42208b7c-edec-40b9-bebf-b568bb3e74c7',
    name: 'Salami - Genova',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 299.23,
    image_url: 'http://dummyimage.com/177x107.png/ff4444/ffffff',
  },
  {
    id: '44693c81-6a3b-4569-beec-93e9c3b1fd1b',
    name: 'Lid - 3oz Med Rec',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 693.61,
    image_url: 'http://dummyimage.com/198x246.png/5fa2dd/ffffff',
  },
  {
    id: '166756d2-79ae-4dde-aa9e-cbcac799d1e4',
    name: 'Bar Bran Honey Nut',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 192.92,
    image_url: 'http://dummyimage.com/159x180.png/ff4444/ffffff',
  },
  {
    id: '1392566f-355b-46a2-aabc-1d31ec0bfebb',
    name: 'Pastry - Cheese Baked Scones',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 898.47,
    image_url: 'http://dummyimage.com/230x146.png/dddddd/000000',
  },
];
