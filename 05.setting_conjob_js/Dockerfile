# Use a imagem oficial do Node.js como a base
FROM node:20-alpine3.18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

RUN apk add --no-cache tzdata
RUN apk add --no-cache cronie
RUN touch /var/log/cron.log

COPY crontab /etc/cron.d/crontab
RUN chmod 0644 /etc/cron.d/crontab
# RUN crontab /etc/cron.d/crontab
RUN (crontab -l ; cat /etc/cron.d/crontab ) | crontab
RUN (crontab -l ; echo "* * * * * echo 'Hello world' >> /var/log/cron.log 2>&1") | crontab
RUN (crontab -l ; echo "* * * * * echo 'Hello world2' >> /var/log/cron.log 2>&1") | crontab
CMD ["sh", "-c", "crond && npm start && tail -f /var/log/cron.log"]

