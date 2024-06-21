FROM alpine

ENV APP_ENV=production
ENV DOCKER_HOST=unix:///var/run/docker.sock
ENV STORAGE_LOCAL_PATH=/dpanel
ENV DB_DATABASE=${STORAGE_LOCAL_PATH}/dpanel.db
ARG BUILDPLATFORM
ARG TARGETARCH

RUN echo ${TARGETARCH} ${BUILDPLATFORM}

# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && \
#   apk add --no-cache --update nginx musl sqlite inotify-tools docker-compose curl openssl && \
#   mkdir -p /tmp/nginx/body /var/lib/nginx/cache/public /var/lib/nginx/cache/private && \
#   export https_proxy=http://172.16.1.198:7890 http_proxy=http://172.16.1.198:7890 && curl https://get.acme.sh | sh

# COPY ./src/nginx/nginx.conf /etc/nginx/nginx.conf
# COPY ./src/nginx/dpanel.conf /etc/nginx/http.d/dpanel.conf
# COPY ./src/nginx/include /etc/nginx/conf.d/include

# COPY ./src/server/${BUILD_PLATFORM}/dpanel /app/server/dpanel
# COPY ./src/html /app/html

# COPY ./src/entrypoint.sh /docker/entrypoint.sh

# WORKDIR /app
# VOLUME [ "/dpanel" ]

# EXPOSE 443
# EXPOSE 8080
# EXPOSE 80

# ENTRYPOINT [ "sh", "/docker/entrypoint.sh" ]