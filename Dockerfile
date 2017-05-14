FROM library/node:latest

COPY . /src

WORKDIR /src

ARG SERVER_URL

ARG NODE_ENV

RUN echo "$SERVER_URL" && echo "$NODE_ENV"

RUN npm install \
  && npm install --dev \
  && npm run build-production

RUN npm install http-server -g

EXPOSE 8080

ENTRYPOINT ["http-server"]

CMD ["/src"]
