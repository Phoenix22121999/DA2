# 1. For build React app
FROM node:14.17.3-alpine AS da2frontend
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

RUN yarn
RUN yarn build

FROM nginx:stable-alpine
COPY --from=da2frontend /app/build /usr/share/nginx/html
COPY --from=da2frontend /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


