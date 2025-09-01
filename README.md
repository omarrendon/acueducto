# Acueducto: Documentación del Proyecto

Este proyecto contiene dos aplicaciones principales:

- **acueducto-backend**: API REST construida con NestJS y Sequelize.
- **acueducto-frontend**: Aplicación web construida con Next.js y React.

## Requisitos previos

- Docker y Docker Compose instalados.
- Node.js (opcional, solo si quieres ejecutar localmente).

## Estructura del proyecto

```
acueducto/
├── acueducto-backend/
├── acueducto-frontend/
├── docker-compose.yml
```

## Pasos para ejecutar el proyecto

### 1. Clona el repositorio

```sh
git clone <URL_DEL_REPOSITORIO>
cd acueducto
```

### 2. Levanta los servicios con Docker

```sh
docker-compose up -d
```

Esto levantará:

- PostgreSQL en el puerto 5433
- Backend NestJS en el puerto 3000
- Frontend Next.js en el puerto 3001

### 3. Ejecuta el seed para poblar la base de datos

```sh
docker-compose exec backend npm run seed
```

Esto insertará datos de ejemplo en la base de datos.

### 4. Accede a las aplicaciones

- **Frontend:** [http://localhost:3001](http://localhost:3001)
- **Backend:** [http://localhost:3000](http://localhost:3000)

## Variables de entorno

- El archivo `.env.local` en `acueducto-frontend` debe tener:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:3000
  ```
- El backend y la base de datos se configuran automáticamente por Docker Compose.

## Notas adicionales

- Si tienes problemas con puertos ocupados, verifica que no haya otros servicios usando los puertos 3000, 3001 o 5433.
- Para reiniciar los servicios:
  ```sh
  docker-compose restart
  ```
- Para detener y eliminar los contenedores:
  ```sh
  docker-compose down -v
  ```

## Estructura de seed

El comando `npm run seed` en el backend ejecuta el archivo `src/database/seed.ts` y pobla la base de datos con productos de ejemplo.

---
