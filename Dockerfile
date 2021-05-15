FROM node:12.18.3-alpine3.12

RUN mkdir -p /home/app

COPY ./app /home/app

WORKDIR /home/app

RUN npm install

CMD [ "node", "server.js" ]