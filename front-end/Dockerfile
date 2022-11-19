# 1. For build React app
FROM node:14.17.3-alpine AS da2frontend
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . /app

ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]



RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy static assets from builder stage
COPY --from=da2frontend /app/build .
COPY --from=da2frontend /app/nginx/default.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off

ENTRYPOINT ["nginx", "-g", "daemon off;"]


# CMD ["yarn", "start"]

# RUN npm run build

# # 2. For Nginx setup
# FROM nginx:alpine

# # Copy config nginx
# COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
# WORKDIR /usr/share/nginx/html

# # Remove default nginx static assets
# RUN rm -rf ./*

# # Copy static assets from builder stage
# COPY --from=build /app/build .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]