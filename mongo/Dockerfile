FROM mongo

LABEL maintainer="ladams1776@yahoo.com"
# TODO: move the username and password out of here
ENV MONGO_INITDB_ROOT_USERNAME admin-user
ENV MONGO_INITDB_ROOT_PASSWORD admin-password
ENV MONGO_INITDB_DATABASE project_tasks
ADD mongo-init.js /docker-entrypoint-initdb.d/
