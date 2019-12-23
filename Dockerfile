FROM node:8.4.0

WORKDIR /var/www/

COPY package.json package.json

RUN rm -rf node_modules

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
