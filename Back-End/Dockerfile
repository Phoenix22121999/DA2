FROM node:14.17.3-alpine as da2

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN  npm install

COPY . .

ENV PORT=4000
ENV ACCESS_TOKEN="51702075DAT_51702017HIEU"
ENV CDN_URL="http://159.223.54.199:3002/"

ENV API_URL = "http://159.223.54.199:4000/"
ENV DATABASE_URL="sqlserver://159.223.54.199:1433;database=QLHS_TDTU;user=sa;password=51702017Hieu51702075Dat;encrypt=true;trustServerCertificate=true;"
ENV CLIENT_ID_TDTU="454375430021-ins1u408up6msulgvnffrl4f9hn1nlt5.apps.googleusercontent.com"
ENV CLIENT_ID_NORMAL="454375430021-ins1u408up6msulgvnffrl4f9hn1nlt5.apps.googleusercontent.com"


EXPOSE 4000

CMD ["npm" , "run" , "start"] 