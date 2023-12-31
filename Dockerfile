FROM node:18-buster as builder
# make the directory where the project files will be stored
RUN mkdir -p /usr/src/next-nginx
# set it as the working directory so that we don't need to keep referencing it
WORKDIR /usr/src/next-nginx
# Copy the package.json file
COPY package.json package.json
# install project dependencies
RUN npm install --force
# copy project files
# make sure to set up .dockerignore to copy only necessary files
COPY . .
# run the build command which will build and export html files
RUN npm run build

# bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# remove existing files from nginx directory
RUN rm -rf /usr/share/nginx/html/*
# copy built assets from 'builder' stage
COPY --from=builder /usr/src/next-nginx/build /usr/share/nginx/html
# add nginx config
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
# start nginx
CMD ["nginx", "-g", "daemon off;"]