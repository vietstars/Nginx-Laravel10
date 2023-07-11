FROM dec24th82/laravel:10.14

# Configure certs
COPY ./config/certs /etc/nginx/certs

# Configure nginx
COPY ./config/web/nginx/sites-enabled /etc/nginx/sites-enabled

# Configure php
COPY ./config/web/php/pool.d/www.conf /etc/php/8.2/fpm/pool.d/www.conf
COPY ./config/web/php/php.ini /etc/php/8.2/fpm/php.ini

# Configure supervisord
COPY ./config/web/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# After initial demo nginx
COPY ./src /var/www/dev.org

# Configure to ssh
RUN mkdir -p /opt/src/scripts
COPY ./config/ssh/ /opt/src/scripts
RUN chmod -R 777 /opt/src/scripts

RUN chmod -R 777 /var/www/dev.org
RUN chmod +x /var/www/dev.org
RUN chmod -R 777 /var/log/

WORKDIR /var/www/dev.org

RUN nginx -t
RUN service php8.2-fpm start
RUN service nginx start

RUN chown -R www-data:www-data /var/www/dev.org

EXPOSE 80 443

RUN /bin/sh -c /opt/src/scripts/initial.sh

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
