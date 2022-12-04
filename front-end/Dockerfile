# 1. Deploy 
FROM node:14.17.3-alpine AS da2frontendDeploy
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . /app
CMD [ "npm", "start" ]

# 2 . Build
FROM da2frontendDeploy AS da2frontend
RUN npm run build

# 3 Config nginx 
FROM nginx:stable-alpine
COPY --from=da2frontend /app/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=da2frontend /app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]