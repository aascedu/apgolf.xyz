FROM    alpine:3.20

RUN     apk add --no-cache mariadb mariadb-client su-exec
COPY    ./tools/script.sh /usr/local/bin/
COPY    conf/50-server.cnf /etc/mysql/mariadb.conf.d/50-server.cnf
COPY    conf/mariadb-server.cnf /etc/my.cnf.d/mariadb-server.cnf
RUN     chmod a+x /usr/local/bin/script.sh

CMD     ["sh", "/usr/local/bin/script.sh"]