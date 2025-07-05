# Por defecto podemos poner una imagen latest, pero podemos pasar una imagen personalizada por argumentos
ARG BASE_IMAGE=httpd:latest
FROM ${BASE_IMAGE}

LABEL description="Insecure Apache server with directory listing enabled and SSL disabled"

# Expose root directory to be browsable (very insecure)
# Disable access control for all directories
# Enable directory listing (insecure)
RUN echo "Alias /root/ /\n<Directory />\n    Options +Indexes\n    AllowOverride All\n    Require all granted\n</Directory>" >> /usr/local/apache2/conf/httpd.conf
RUN echo "ServerTokens Full\nServerSignature On" >> /usr/local/apache2/conf/httpd.conf

# Remove security-related headers
RUN echo "Header unset X-Frame-Options" >> /usr/local/apache2/conf/httpd.conf && \
    echo "Header unset X-Content-Type-Options" >> /usr/local/apache2/conf/httpd.conf

# Remove SSL conf from official httpd image
RUN rm -f /usr/local/apache2/conf/extra/httpd-ssl.conf

RUN chmod -R 777 /usr/local/apache2/htdocs

# Add a file with credentials (insecure)
RUN echo "password=admin123" > /usr/local/apache2/htdocs/creds.txt

# Disable logging (send logs to /dev/null)
RUN echo "ErrorLog /dev/null" >> /usr/local/apache2/conf/httpd.conf && \
    echo "CustomLog /dev/null common" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80