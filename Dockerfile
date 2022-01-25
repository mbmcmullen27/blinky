FROM node:17.4.0-stretch-slim

WORKDIR /app

COPY ./src package*.json /app

RUN npm install

EXPOSE 8080
CMD [ "node", "server.js" ]
