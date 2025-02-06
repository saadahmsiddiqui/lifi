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
JWT_SECRET=""
PORT=3000
ALCHEMY_API_KEY=""
MAINNET_RPC=""
MESSAGE_TO_SIGN="This is a LIFI Test"
```

- setup `.env` file in `apps/app` directory with the following contents
```sh
VITE_API_ENDPOINT=http://localhost:3000/
VITE_RAINBOWKIT_PROJECT_ID=""
VITE_MESSAGE_TO_SIGN="This is a LIFI Test"
```

- Starting fastify API server
```sh
yarn start-api
```