import { Sequelize } from 'sequelize-typescript';
import { CreationAttributes } from 'sequelize';
import { Product } from '../modules/products/entities/product.entity';

async function seed() {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'postgres',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    username: process.env.DB_USER || 'nestuser',
    password: process.env.DB_PASS || 'nestpass',
    database: process.env.DB_NAME || 'nestdb',
    models: [Product],
    logging: false,
  });

  await sequelize.sync({ force: true });

  const productsData: CreationAttributes<Product>[] = [
    {
      title: 'Ana Perfume',
      brand: 'Chanel',
      description: 'Perfume floral con aroma suave',
      price: 500,
    },
    {
      title: 'Laptop',
      brand: 'OsoTech',
      description: 'Laptop poderosa para gaming',
      price: 1200,
    },
    {
      title: 'Phone',
      brand: 'Samsung',
      description: 'El mejor radar para detectar nivel de batería',
      price: 800,
    },
    {
      title: 'Tablet',
      brand: 'Apple',
      description: 'Tablet con kayak incluido en la funda',
      price: 1000,
    },
    {
      title: 'Camera',
      brand: 'Sony',
      description: 'Una cámara civic para fotografía profesional',
      price: 1500,
    },
  ];

  await Product.bulkCreate(productsData);

  console.log('✅ Seed ejecutado correctamente');
  await sequelize.close();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
