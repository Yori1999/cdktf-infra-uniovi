#!/bin/bash

set -e

apt-get update -y && install -y apache2
systemctl start apache2
systemctl enable apache2

# Enable directory listing and disable access control
cat <<EOF >> /etc/apache2/apache2.conf
Alias /root/ /
<Directory />
    Options +Indexes
    AllowOverride All
    Require all granted
</Directory>
ServerTokens Full
ServerSignature On
Header unset X-Frame-Options
Header unset X-Content-Type-Options
ErrorLog /dev/null
CustomLog /dev/null common
EOF

# Enable headers module
a2enmod headers

# Remove SSL config
rm -f /etc/apache2/sites-enabled/default-ssl.conf || true
rm -f /etc/apache2/mods-enabled/ssl.conf || true

# Make web root writable
chmod -R 777 /var/www/html

# Add insecure credentials file
echo "password=admin123" > /var/www/html/creds.txt

echo "<html><body><h1>Index page for testing. Welcome to your insecure Apache server!</h1><p>This has been programmed by María Flórez</p></body></html>" > /var/www/html/index.html

# Restart Apache
systemctl restart apache2