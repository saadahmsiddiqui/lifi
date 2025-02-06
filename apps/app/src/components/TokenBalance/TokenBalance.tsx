import { Card, Flex } from "@radix-ui/themes";
import "./TokenBalance.css";
import { formatBalance } from "../../utils";
import { useMemo } from "react";

interface TokenBalanceProps {
    tokenBalance: string;
    symbol: string;
    name: string;
    decimals: number;
}

function TokenBalance({ decimals, tokenBalance, symbol, name }: TokenBalanceProps) {
    const balance = useMemo(() => {
        return formatBalance(tokenBalance, decimals)
    }, [tokenBalance, decimals])

    return (
        <Card className="tokenBalanceItem" mt="3">
            <Flex justify={'between'} flexShrink='0'>
                <Flex>{name}</Flex>
                <Flex>{balance} {symbol}</Flex>
            </Flex>
        </Card>
    );
}

export default TokenBalance;