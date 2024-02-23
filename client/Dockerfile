# FROM node:16-alpine AS Builder
FROM node:16-alpine

# RUN mkdir src

# WORKDIR /src


COPY package.json  ./
COPY package-lock.json  ./

RUN npm install --legacy-peer-deps

COPY . ./
RUN yarn build
CMD [ "yarn", "start" ]