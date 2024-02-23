FROM node:16-alpine

RUN mkdir src

WORKDIR /src

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . /src/

CMD ["node","index.js"]