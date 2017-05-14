build:
	docker build --build-arg NODE_ENV="production" -t=seal-client .

run:
	docker run -it -p 8080:8080 \
		-e "NODE_ENV=production" \
		seal-client

.PHONY: build run
