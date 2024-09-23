# Usa la imagen oficial de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /workspace

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando por defecto para ejecutar tu aplicación
CMD ["npm", "start"]
