FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Instalar dependencias después de copiar todo el código

EXPOSE 3001

CMD ["npm", "run", "dev"]