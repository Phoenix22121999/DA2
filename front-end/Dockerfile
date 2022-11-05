FROM node:14.17.3-alpine AS da2frontend
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]

