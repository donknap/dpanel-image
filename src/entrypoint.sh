#!/bin/sh

NGINX_CONFIG_DIR="/dpanel/nginx"

chmod 755 /home/server/dpanel && mkdir -p /dpanel/nginx/default_host /dpanel/nginx/proxy_host \
  /dpanel/nginx/redirection_host /dpanel/nginx/dead_host /dpanel/nginx/temp \
  /dpanel/nginx/cert /dpanel/storage /dpanel/challenge/.well-known/acme-challenge

reload_nginx() {
    echo "Reloading Nginx configuration..."
    nginx -s stop && nginx
    if [ $? -ne 0 ]; then
        echo "Failed to reload Nginx configuration."
    fi
}

while true; do
    inotifywait -r -e modify,create,delete,move "$NGINX_CONFIG_DIR"
    reload_nginx
done &

nginx

/app/server/dpanel server:start -f /app/server/config.yaml