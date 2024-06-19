FROM alpine

ENV APP_ENV=production
ENV DOCKER_HOST=unix:///var/run/docker.sock
ENV STORAGE_LOCAL_PATH=/dpanel
ENV DB_DATABASE=${STORAGE_LOCAL_PATH}/dpanel.db

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && \
  apk add --no-cache --update nginx musl sqlite inotify-tools docker-compose curl openssl && \
  mkdir -p /dpanel/nginx/default_host /dpanel/nginx/proxy_host \
  /dpanel/nginx/redirection_host /dpanel/nginx/dead_host /dpanel/nginx/temp \
  /dpanel/nginx/cert \
  /tmp/nginx/body /var/lib/nginx/cache/public /var/lib/nginx/cache/private \
  /dpanel/storage /dpanel/challenge/.well-known/acme-challenge

COPY ./src/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./src/nginx/dpanel.conf /etc/nginx/http.d/dpanel.conf
COPY ./src/nginx/include /etc/nginx/conf.d/include

COPY ./src/server /app/server
COPY ./src/html /app/html

COPY ./src/entrypoint.sh /docker/entrypoint.sh

WORKDIR /app
VOLUME [ "/dpanel" ]

EXPOSE 443
EXPOSE 8080
EXPOSE 80

ENTRYPOINT [ "sh", "/docker/entrypoint.sh" ]