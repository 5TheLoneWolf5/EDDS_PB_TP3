FROM node:24-alpine AS build-stage

WORKDIR /app

COPY ./Front-End/package*.json ./
RUN npm install

COPY ./Front-End .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
