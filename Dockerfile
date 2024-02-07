FROM node:21.6.1-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
