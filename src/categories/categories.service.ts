import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly dbService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.dbService.category.create({ data: createCategoryDto });
  }

  async findAll() {
    return await this.dbService.category.findMany();
  }

  async findOne(id: string) {
    return await this.dbService.category.findFirst({
      where: { id },
      include: { products: true },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.dbService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    return await this.dbService.category.delete({ where: { id } });
  }
}
