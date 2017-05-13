FROM library/node:latest

COPY . /src

WORKDIR /src

RUN npm install \
  && npm run build -p

EXPOSE 8080

ENTRYPOINT ["npm"]

CMD ["start"]
