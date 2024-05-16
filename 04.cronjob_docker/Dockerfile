# Dockerfile to create image with cron services
FROM ubuntu:latest

#Install Cron
RUN apt-get update
RUN apt-get -y install cron

COPY crontab /etc/cron.d/crontab

RUN touch /var/log/cron.log

RUN (crontab -l ; echo "* * * * * echo 'Hello world' >> /var/log/cron.log 2>&1") | crontab

RUN (crontab -l ; cat /etc/cron.d/crontab ) | crontab

# Run the command on container startup
CMD cron && tail -f /var/log/cron.log