import { formatUnits } from "ethers";

export function formatBalance(balance: string, decimals: number) {
    return formatUnits(balance, decimals)
}