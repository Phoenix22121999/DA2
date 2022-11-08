FROM node:14.17.3-alpine as da2

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN  npm install

COPY . .

EXPOSE 4000

CMD ["npm" , "run" , "start"] 