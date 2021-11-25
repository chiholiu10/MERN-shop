FROM node:16.10.0-buster

WORKDIR /usr/App

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["npm", "run", "start"]

