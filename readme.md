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

- setup `.env` file in `apps/api` directory with the following contents
```sh
# jSON token secret key
JWT_SECRET=""
# server port
PORT=3000
# Alchemy API Key
ALCHEMY_API_KEY=""
# Ethereum RPC URL
MAINNET_RPC=""
```

- Starting fastify API server
```sh
yarn start-api
```