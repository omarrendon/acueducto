import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../modules/products/entities/product.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'postgres',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
      username: process.env.DB_USER || 'nestuser',
      password: process.env.DB_PASS || 'nestpass',
      database: process.env.DB_NAME || 'nestdb',
      models: [Product],
      autoLoadModels: true,
      synchronize: true, // ⚠️ en prod usar migraciones
      logging: false,
    }),
  ],
})
export class DatabaseModule {}
