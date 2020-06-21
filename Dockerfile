FROM node:erbium-alpine

WORKDIR /srv/slate

# install the app
COPY . .

# install dependencies
RUN npm ci --unsafe-perm

VOLUME /srv/slate/source
VOLUME /srv/slate/_site

EXPOSE 4567
CMD [ "npm", "run", "serve" ]
