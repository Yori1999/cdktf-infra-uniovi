#!/bin/bash

apt-get update -y && apt-get install -y apache2
systemctl start apache2
systemctl enable apache2
echo "<html><body><h1>Index page for testing. Welcome to your insecure Apache server!</h1></body></html>" > /var/www/html/index.html