#!/bin/bash

set -e

apt-get update -y && apt-get upgrade -y
apt-get install -y apache2 ufw
systemctl start apache2
systemctl enable apache2

# Enable essential security modules
a2enmod ssl
a2enmod headers
a2enmod rewrite


# Disable directory listing and restrict overrides
cat <<EOF >> /etc/apache2/apache2.conf

# Hardening Additions
<Directory /var/www/html>
    Options -Indexes
    AllowOverride None
    Require all granted
</Directory>

Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "no-referrer"
Header always set Content-Security-Policy "default-src 'self';"

ServerTokens Prod
ServerSignature Off
EOF

ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw allow 22/tcp    # SSH
ufw --force enable   # Enable UFW


# Restart Apache
systemctl restart apache2

