# 1. For build React app
FROM node:14.17.3-alpine AS da2frontend
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=da2frontend /app/build /user/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
