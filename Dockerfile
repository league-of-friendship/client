FROM library/node:latest

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm"]

CMD ["start"]
