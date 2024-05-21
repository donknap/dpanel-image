#!/bin/sh

chmod 755 /home/server/dpanel && mkdir -p /dpanel/storage

nginx
/home/server/dpanel server:start -f /home/server/config.yaml