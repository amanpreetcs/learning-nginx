FROM node:20-alpine

WORKDIR /learning/app/nginx

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","server.js"]


