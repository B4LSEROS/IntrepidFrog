FROM node:16.14-alpine

WORKDIR /application-client

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
