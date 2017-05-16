FROM library/node:latest

ARG SERVER_URL

ARG NODE_ENV

WORKDIR /src

RUN npm install http-server -g

COPY package.json /src/package.json

RUN npm install \
  && npm install --dev

COPY . /src

RUN npm run build-production

EXPOSE 8080

ENTRYPOINT ["http-server"]

CMD ["/src"]
