#!/bin/bash
set -e

# Update system
apt-get update -y && apt-get upgrade -y

# Install Nginx
apt-get install -y nginx
systemctl enable nginx
systemctl start nginx

# Install MariaDB
apt-get install -y mariadb-server
systemctl enable mariadb
systemctl start mariadb

# Create default DB and user (DEMO ONLY - use secrets in production)
DB_USER="admin"
DB_PASS="admin123"
DB_NAME="myappdb"

mysql -u root <<EOF
CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}';
CREATE DATABASE IF NOT EXISTS ${DB_NAME};
GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'localhost';
FLUSH PRIVILEGES;
EOF

# Install PHP and PHP-FPM + common extensions
apt-get install -y php-fpm php-mysql php-cli php-curl php-mbstring

# Configure Nginx to serve PHP from /var/www/html
cat > /etc/nginx/sites-available/default <<'NGINX_CONF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;
    index index.php index.html index.htm;

    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }
}
NGINX_CONF

# Test PHP
echo "<?php phpinfo(); ?>" > /var/www/html/info.php

# Restart services
systemctl reload nginx
systemctl restart php8.1-fpm

# Done
echo "LEMP stack installation complete"