FROM node:24-alpine AS build-stage

WORKDIR /app

COPY ./Front-end/package*.json ./
RUN npm install

COPY ./Front-end .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh", "-c", "sed -i 's/listen  80;/listen '\"$PORT\"';/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
