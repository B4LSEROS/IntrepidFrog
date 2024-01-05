FROM node:16.14-alpine

WORKDIR /application-backend

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
