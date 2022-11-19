# 1. For build React app
FROM node:14.17.3-alpine AS da2frontend
WORKDIR /app
COPY package*.json ./

RUN npm run build

FROM nginx:alpine

COPY --from=da2frontend ./build /var/www/jobportaltdtu/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
