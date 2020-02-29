FROM node:12.14.0-stretch

# create app directory
WORKDIR /usr/srv/app

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# bundle app source
COPY . .

# copy required setup files
COPY docker/rootfs /

# launch the application
ENV HOST 0.0.0.0
ENTRYPOINT ["/entrypoint"]
