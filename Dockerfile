FROM node:12.22.16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

CMD [ "npm", "start" ]
