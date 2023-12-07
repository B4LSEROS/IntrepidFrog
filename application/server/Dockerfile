FROM node:16.14-alpine

WORKDIR /application-server

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
