FROM php:7.0-apache
VOLUME [“/var/www/html”, “/etc/apache2”, “/usr/local/etc/php”]
# Install dependencies
RUN apt-get update && \
 apt-get -y install apache2

# Install apache and write hello world message

# Configure apache
RUN echo '. /etc/apache2/envvars' > /root/run_apache.sh && \
 echo 'mkdir -p /var/run/apache2' >> /root/run_apache.sh && \
 echo 'mkdir -p /var/lock/apache2' >> /root/run_apache.sh && \
 echo '/usr/sbin/apache2 -D FOREGROUND' >> /root/run_apache.sh && \
 chmod 755 /root/run_apache.sh

EXPOSE 80

VOLUME /var/www/html/
ADD /platforms/browser/www/ /var/www/html/

CMD /root/run_apache.sh
