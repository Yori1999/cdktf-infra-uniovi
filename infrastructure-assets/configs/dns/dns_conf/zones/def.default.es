$TTL    604800
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
; Example: 
; WARNING, THIS IS JUST A PLACEHOLDER! You will need to remove it and substitute it with your own machines
; After changing this file with your desired configuration, you must reload the service with rndc reload
; web1.default.es. IN A 172.136.0.3
; web2.default.es. IN A 172.136.0.4