### STAGE 1: Build ###
FROM node:10-alpine as build
ARG LOCAL_ENV=false
COPY ./src /app/src/
COPY ./*.json /app/
WORKDIR /app

RUN test $LOCAL_ENV="false" && npm i

## Build angular app in production mode and store the artifacts
RUN $(npm bin)/ng build --prod --output-path=dist

### STAGE 2: Setup ###
FROM nginx:alpine
ENV HOSTNAME=localhost

RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
