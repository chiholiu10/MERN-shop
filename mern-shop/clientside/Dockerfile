FROM node:16.10.0-buster

WORKDIR /usr/src/App

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "run", "start"]

