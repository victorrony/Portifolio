FROM node:20.18.1-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

RUN yarn cache clean

COPY . .

ENV NODE_ENV production
ARG ENV
RUN echo -e "\n${ENV}" >> .env

RUN yarn build

# RUN yarn lint || true

RUN yarn install --production --ignore-scripts --prefer-offline

EXPOSE 3000

CMD ["yarn", "start"]
