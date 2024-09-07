FROM docker.n8n.io/n8nio/n8n:1.56.2
USER root
RUN npm install -g axios node-telegram-bot-api
USER node
