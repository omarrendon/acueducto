import 'reflect-metadata';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class SearchProductsDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(3, {
    message:
      'La búsqueda por marca o descripción debe tener al menos 3 caracteres',
  })
  query?: string;
}
