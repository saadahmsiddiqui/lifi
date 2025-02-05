const url = () =>
  "https://eth-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY + "/";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const getTokenBalancesBody = (address: string) =>
  JSON.stringify({
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_getTokenBalances",
    params: [address, "erc20"],
  });

const getErc20Tokens = (address: string) =>
  fetch(url(), {
    method: "POST",
    headers: headers,
    body: getTokenBalancesBody(address),
  }).then((response) => response.json());

export { getErc20Tokens };
