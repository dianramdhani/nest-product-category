import { Category } from '@prisma/client';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto implements Partial<Category> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
