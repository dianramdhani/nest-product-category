import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly dbService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return await this.dbService.product.create({ data: createProductDto });
  }

  async findAll() {
    return await this.dbService.product.findMany();
  }

  async findOne(id: string) {
    return await this.dbService.product.findFirst({
      where: { id },
      include: { category: true },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.dbService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    return await this.dbService.product.delete({ where: { id } });
  }
}
