FROM node:14.18.1-alpine
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 8082
RUN npm config set registry http://registry.npm.taobao.org
RUN npm install
RUN npm cache clean --force
CMD ["node", "./app.js"]

