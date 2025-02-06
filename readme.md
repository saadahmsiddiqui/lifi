# Welcome to LIFI task

You will need `yarn` and `redis` setup on your machine.

- Install docker and run
```sh
docker run -d --name lifi -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

- Just install dependencies using yarn by
```sh
yarn
```

- Starting fastify API server
```sh
yarn start-api
```