import { Product } from '@prisma/client';

export class CreateProductDto implements Partial<Product> {
  name: string;
  price: number;
  description: string;
  categoryId: string;
}
