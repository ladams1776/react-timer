FROM node AS builder

# kink: Need to resolve: debconf: delaying package configuration, since apt-utils is not installed
# kink: Need to resolve: package.json error

LABEL maintainer="ladams1776@yahoo.com"

RUN apt-get update
# RUN apt-get install --no-install-recommends --no-install-suggests -y npm
WORKDIR /app
COPY . .
RUN npm install

FROM node
EXPOSE 3001
WORKDIR /app
COPY --from=builder /app .
ENV DEBIAN_FRONTEND teletype
CMD ["npm", "run-script", "server"]