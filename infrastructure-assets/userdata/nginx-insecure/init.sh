#!/bin/bash

set -e

apt-get update && apt-get install -y nginx

# Start and enable NGINX service
# It technically starts automatically when installed, but we ensure it's running and enabled to start on boot
systemctl start nginx
systemctl enable nginx

mkdir -p /usr/share/nginx/html/testdir
echo "<html><body><h1>Index page for testing. Hi! Welcome to the most insecure server ever.</h1></body></html>" > /usr/share/nginx/html/testdir/index.html

# Overwrite nginx.conf with an insecure configuration
cat <<EOF > /etc/nginx/nginx.conf
worker_processes auto;

events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout 65;

    server {
        listen 80;
        server_name localhost;

        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
            autoindex on;
            autoindex_exact_size off;
            autoindex_localtime on;

            add_header X-Content-Type-Options "";
            add_header X-Frame-Options "";
            add_header X-XSS-Protection "";
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root /usr/share/nginx/html;
        }
    }

    log_format insecure '\$remote_addr - \$remote_user [\$time_local] "\$request" '
                        '\$status \$body_bytes_sent "\$http_referer" '
                        '"\$http_user_agent" "\$http_cookie"';

    access_log /var/log/nginx/insecure_access.log insecure;
}
EOF

# Restart NGINX to apply changes, just in case reload is not sufficient
systemctl restart nginx