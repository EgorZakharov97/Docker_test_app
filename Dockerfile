FROM node:10
WORKDIR /app/src
COPY ./src/package*.json ./app/src/
RUN npm install
RUN npm install -g nodemon
CMD ["node", "app.js"]