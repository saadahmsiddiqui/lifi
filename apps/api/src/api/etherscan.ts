const getErc20Holdings = (
  address: string,
  page: number = 1,
  offset: number = 100,
) => {
  const url = new URL("/api", "https://api.etherscan.io");
  url.searchParams.set("module", "account");
  url.searchParams.set("action", "addresstokenbalance");
  url.searchParams.set("address", address);
  url.searchParams.set("page", String(page));
  url.searchParams.set("offset", String(offset));
  url.searchParams.set("apikey", process.env.ETHERSCAN_API_KEY!);

  return fetch(url);
};

export { getErc20Holdings };
