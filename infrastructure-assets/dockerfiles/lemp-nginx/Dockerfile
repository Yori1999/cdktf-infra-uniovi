ARG BASE_IMAGE=nginx:latest
FROM ${BASE_IMAGE}

ARG PHP_CONTAINER_NAME
ENV PHP_CONTAINER_NAME=${PHP_CONTAINER_NAME}

# Copy the template nginx config
COPY ../../configs/lemp/nginx.conf.template /etc/nginx/templates/nginx.conf.template
# Use envsubst to replace PHP_CONTAINER_NAME in the template with the build arg
# And then output it to the nginx config file
RUN envsubst '$PHP_CONTAINER_NAME' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf