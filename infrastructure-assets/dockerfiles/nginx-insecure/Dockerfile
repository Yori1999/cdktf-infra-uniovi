# Por defecto podemos poner una imagen latest, pero podemos pasar una imagen personalizada por argumentos
ARG BASE_IMAGE=nginx:latest
FROM ${BASE_IMAGE}

# Enable autoindex (directory listing), useful to be able to show the directory listing (insecure)
RUN mkdir -p /usr/share/nginx/html/testdir \
  && echo "Index page for testing that this is indeed a very insecure server" > /usr/share/nginx/html/testdir/index.html

# Replace the default nginx.conf with an insecure one
COPY ../../configs/nginx-insecure/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80