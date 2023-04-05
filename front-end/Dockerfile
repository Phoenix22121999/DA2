FROM node:18.12.1-alpine AS da2frontend
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

RUN yarn
RUN yarn run build

FROM nginx:stable-alpine
COPY --from=da2frontend /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=da2frontend /app/nginx/nginx.conf /etc/nginx/conf.d
# Containers run nginx with global directives and daemon off
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
