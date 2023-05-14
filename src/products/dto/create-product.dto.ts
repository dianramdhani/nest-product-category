import { Product } from '@prisma/client';
import { IsString, IsNumber, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateProductDto implements Partial<Product> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  description: string;

  @IsMongoId()
  @IsNotEmpty()
  categoryId: string;
}
