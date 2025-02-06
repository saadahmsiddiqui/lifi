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

- Starting frontend
```sh
yarn start-fe
```

- navigate to https://localhost:5173 to use app

## Versions

- yarn version `1.22.22`
- node version `v20.18.2`


## Some notes from me

- I haven't handled account change handling in this test (out of scope, not mentioned, saving some time)
- You will need redis as I am caching stuff
- You will also need an ETH RPC URL, many from `chainlist.org` work well
- Using `ethers` as I'm familiar with it on backend
- You will need `reown` api key running frontend
- I have not added `HTTP` tests
- Leaderboard does not update in realtime

## Test

- Need a clean redis instance to be running to test leaderboard
- `yarn install playwright` for testing front end
- test frontend using `yarn test-fe`
- test backend using `yarn test-api`