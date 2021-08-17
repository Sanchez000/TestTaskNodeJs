FROM node:15.14.0

WORKDIR /usr/src/app

RUN apt-get update && apt-get install 

COPY *.json ./

RUN npm install

COPY ./src ./src
COPY ./.env ./.env

EXPOSE 3000
CMD [ "npm", "run", "dev" ]