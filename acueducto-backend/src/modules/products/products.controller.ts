import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService, ProductResponse } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('search')
  async search(
    @Query('query') query: string,
  ): Promise<{ products: ProductResponse[] } | { message: string }> {
    if (!query) return { message: 'Debe enviar un parámetro query' };

    const products = await this.productsService.searchProducts(query);

    return { products };
  }
  @Get()
  async findAll(): Promise<{ products: ProductResponse[] }> {
    const products = await this.productsService.findAllProducts();
    return { products };
  }
}
