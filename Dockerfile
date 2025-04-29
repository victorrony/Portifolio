FROM node:20.18.1-alpine

WORKDIR /app

# Copie os arquivos de dependências do npm
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci --production

# Copia o restante do código
COPY . .

ENV NODE_ENV production
ARG ENV
RUN echo -e "\n${ENV}" >> .env

# Gera o build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]