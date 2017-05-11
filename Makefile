build:
	docker build -t=seal-client .

run:
	docker run -it -p 8080:8080 \
		seal-client

.PHONY: build run
