import { ethers } from "ethers";
import { erc20Abi } from "../abi/erc20.abi";

type Erc20Metadata = {
    decimals: number;
    name: string;
    symbol: string;
}

async function getErc20Metadata(address: string): Promise<Erc20Metadata> {
    const provider = new ethers.JsonRpcProvider(process.env.MAINNET_RPC);
    const contract = new ethers.Contract(address, erc20Abi, provider);
    let decimals = await contract.decimals();
    decimals = Number(decimals);
    const name = await contract.name();
    const symbol = await contract.symbol();

    return { name, decimals, symbol }
}

export { getErc20Metadata, Erc20Metadata }