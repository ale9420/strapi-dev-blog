# Fase de construcción
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias primero para aprovechar la cache de Docker
COPY package*.json ./

# Instalar dependencias de producción
RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean --force

# Copiar el resto de los archivos de la aplicación
COPY . .

ENV NODE_ENV production

# Construir la aplicación
RUN yarn build

# Fase de producción
FROM node:18-alpine

# Establecer el directorio de trabajo en la imagen final
WORKDIR /app

# Establecer la variable de entorno para producción
ENV NODE_ENV production

# Copiar solo los artefactos de la construcción
COPY --from=builder /app ./

# Exponer el puerto en el que corre Strapi
EXPOSE 1337

# Configurar volúmenes para las cargas persistentes
VOLUME ["/app/public/uploads"]

# Comando para ejecutar la aplicación
CMD ["yarn", "start"]