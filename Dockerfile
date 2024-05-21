FROM alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
RUN apk add --no-cache --update nginx musl sqlite

WORKDIR /home
VOLUME [ "/dpanel" ]

ENV DOCKER_HOST=unix:///var/run/docker.sock
ENV DB_DATABASE=/dpanel/dpanel.db

EXPOSE 8806
EXPOSE 80

COPY ./src/server /home/server
COPY ./src/html /home/html
COPY ./src/nginx/default.conf /etc/nginx/http.d/default.conf
COPY ./src/entrypoint.sh /docker/entrypoint.sh

ENTRYPOINT [ "sh", "/docker/entrypoint.sh" ]