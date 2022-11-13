FROM node:14.17.3-alpine as cdnda2

WORKDIR /app

COPY package*.json ./

RUN  npm install

COPY . .

EXPOSE 3002

CMD ["npm" , "run" , "start"] 