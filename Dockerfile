FROM node

LABEL maintainer="ladams1776@yahoo.com"

RUN apt-get update

RUN apt-get install --no-install-recommends --no-install-suggests -y yarn

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000

ENV DEBIAN_FRONTEND teletype

# CMD ["yarn run dev"]