FROM node:14.17.1

WORKDIR /app

EXPOSE 3000

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
