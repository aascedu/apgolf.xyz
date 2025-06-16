FROM nginx:alpine

RUN mkdir -p /etc/nginx/ssl && \
    apk add --no-cache openssl && \
    openssl req -x509 -nodes -out /etc/nginx/ssl/apgolf.crt -keyout /etc/nginx/ssl/apgolf.key -subj "/C=FR/CN=apgolf.xyz"