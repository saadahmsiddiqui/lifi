
interface TokenBalancesResponse {
    balances: {
        address: string;
        tokenBalances: Array<{ tokenBalance: string; contractAddress: string }>
    }
    tokens: Record<string, { name: string; decimals: number; symbol: string }>
}

async function fetchTokenBalances(): Promise<TokenBalancesResponse> {
    const url = new URL("/api/tokens", import.meta.env.VITE_API_ENDPOINT);
    return fetch(url, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem('token')}`
        }
    }).then((response) => response.json() as Promise<TokenBalancesResponse>);
}

async function createAcount(address: string, signature: string) {
    const url = new URL("/api/account/create", import.meta.env.VITE_API_ENDPOINT);
    return fetch(url, {
        method: "POST",
        body: JSON.stringify({ address, signature }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then((response) => response.json()).then((json) => {
        if (json.jwt) {
            localStorage.setItem("token", json.jwt);
        }
        return json;
    });
}

async function fetchLeaderboard() {
    const url = new URL("/api/leaderboard", import.meta.env.VITE_API_ENDPOINT);
    return fetch(url, {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    }).then((response) => response.json());
}


export { createAcount, fetchTokenBalances, fetchLeaderboard };