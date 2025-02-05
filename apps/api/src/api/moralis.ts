function getErc20Tokens(address: string) {
  const url = new URL(
    `${address}/er20`,
    "https://deep-index.moralis.io/api/v2.2/",
  );
  url.searchParams.set("chain", "eth");

  return fetch(url, {
    method: "GET",
    headers: {
      "X-API-Key": process.env.MORALIS_API_KEY!,
      accept: "application/json",
    },
  });
}

export { getErc20Tokens };
