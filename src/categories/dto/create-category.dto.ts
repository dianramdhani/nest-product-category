import { Category } from '@prisma/client';

export class CreateCategoryDto implements Partial<Category> {
  name: string;
  description: string;
}
