FROM mongo

LABEL maintainer="ladams1776@yahoo.com"

# ENV MONGO_INITDB_ROOT_USERNAME admin-user
# ENV MONGO_INITDB_ROOT_PASSWORD admin-password
ENV MONGO_INITDB_DATABASE tags
ENV MONGO_INITDB_DATABASE projects
ADD mongo-init.js /docker-entrypoint-initdb.d/
