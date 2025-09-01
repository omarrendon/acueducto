import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';

export interface ProductResponse {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  discounted?: boolean;
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  private isPalindrome(text: string): boolean {
    const normalized = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return normalized === normalized.split('').reverse().join('');
  }

  async searchProducts(query: string): Promise<ProductResponse[]> {
    const lowerQuery = query.toLowerCase();

    // 1. Buscar por title exacto
    let results = await this.productModel.findAll({
      where: { title: lowerQuery },
    });

    // 2. Si no encontró → buscar en brand/description (más de 3 chars)
    if (results.length === 0 && query.length > 3) {
      results = await this.productModel.findAll({
        where: {
          [Op.or]: [
            { brand: { [Op.iLike]: `%${query}%` } },
            { description: { [Op.iLike]: `%${query}%` } },
          ],
        },
      });
    }

    // 3. Aplicar descuento si es palíndromo
    if (this.isPalindrome(query) && results.length > 0) {
      return results.map((p) => {
        const product = p.get({ plain: true } as any) as ProductResponse;
        return { ...product, price: product.price / 2, discounted: true };
      });
    }

    return results.map((p) => {
      const product = p.get({ plain: true } as any) as ProductResponse;
      return {
        id: product.id,
        title: product.title,
        brand: product.brand,
        description: product.description,
        price: product.price,
      };
    });
  }
  async findAllProducts(): Promise<ProductResponse[]> {
    const results = await this.productModel.findAll();
    return results.map((p) => {
      const product = p.get({ plain: true } as any) as ProductResponse;
      return {
        id: product.id,
        title: product.title,
        brand: product.brand,
        description: product.description,
        price: product.price,
      };
    });
  }
}
