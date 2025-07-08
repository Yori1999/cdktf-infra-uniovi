#!/bin/bash
set -e

# Update system
apt-get update -y && apt-get upgrade -y

# Install Apache
apt-get install -y apache2
systemctl enable apache2
systemctl start apache2

# Install MariaDB (drop-in replacement for MySQL)
apt-get install -y mariadb-server
systemctl enable mariadb
systemctl start mariadb

DB_USER="admin"
DB_PASS="admin123"
DB_NAME="myappdb"

mysql -u root <<EOF
CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}';
CREATE DATABASE IF NOT EXISTS ${DB_NAME};
GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'localhost';
FLUSH PRIVILEGES;
EOF

# Install PHP + modules
apt-get install -y php libapache2-mod-php php-mysql

# Test PHP page
echo "<?php phpinfo(); ?>" > /var/www/html/info.php

# Restart Apache to load PHP module
systemctl restart apache2

# Done
echo "LAMP stack installation complete"