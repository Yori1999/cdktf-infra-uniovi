#!/bin/bash

apt-get update
apt-get install -y bind9 bind9-host dnsutils
mkdir -p /etc/bind/zones

# Write zone file (example)
cat <<EOF > /etc/bind/zones/def.default.es
\$TTL    604800
@       IN      SOA     ns1.default.es. root.default.es. (
        3     ; Serial
    604800     ; Refresh
    86400     ; Retry
  2419200     ; Expire
    604800 )   ; Negative Cache TTL
;

; name servers - NS records
IN      NS      ns1.default.es.

; name servers - A records
ns1     IN      A       127.0.0.1
; Example: 
; WARNING: This is just a placeholder. Replace with your own host entries.
; After editing this file, apply changes with: rndc reload
; host1   IN      A       192.168.1.10
EOF

# Create a basic named.conf.local file
# This file is used to define the zones for BIND
cat <<EOF > /etc/bind/named.conf.local
zone "default.es" {
    type master;
    file "/etc/bind/zones/def.default.es";
};
EOF

# Basic BIND options configuration
# This file contains global options for the BIND server
cat <<EOF > /etc/bind/named.conf.options
options {
    directory "/var/cache/bind";

    recursion yes;
    listen-on { any; };

    forwarders {
        8.8.8.8;
        8.8.4.4;
    };
};
EOF

systemctl enable bind9
systemctl restart bind9