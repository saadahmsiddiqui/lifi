import { Card, Flex, Spinner, Text } from "@radix-ui/themes";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useAccountCreation from "../../lib/hooks/useAccountCreation";
import "./Home.css";
import { useTokenBalances } from "../../lib/hooks/useTokenBalances";
import { formatBalance } from "../../utils";
import { useAccount } from "wagmi";

function Home() {
    const { address } = useAccount();
    const { message, error, loading } = useAccountCreation();
    const { isFetching, data } = useTokenBalances();

    if (!address) {
        return (
            <Flex justify='center' align='center'>
                <ConnectButton />
            </Flex>
        )
    }

    if (loading || error) {
        return (<Flex justify='center' align='center'>
            {loading && <Spinner className="spinner" size='3' />}
            <Text as="p" color={error ? "red" : "gray"} size="2" ml={loading ? "2" : undefined}>
                {message}
            </Text></Flex>)
    }

    return (
        <Flex justify='center' align='center' >
            <Card variant="surface" className="tokensCard">
                <Flex justify='between'>
                    <Text as="div" size="6" weight="bold" mt='2'>
                        Your Account
                    </Text>
                    <ConnectButton showBalance={false} chainStatus={{ largeScreen: "icon", smallScreen: "icon" }} />
                </Flex>

                <Flex className="tokenBalancesContainer" direction="column" justify={isFetching ? "center" : undefined} align={isFetching ? "center" : undefined} flexGrow='1'>
                    {isFetching && <Flex justify='center' align='center'><Spinner className="spinner" size='3' /><Text ml={'2'}>Fetching Tokens</Text></Flex>}
                    {!isFetching && data && data.balances.tokenBalances.length && data.balances.tokenBalances.map((token) => {
                        return (
                            <Card className="tokenBalanceItem" key={token.contractAddress} mt="3">
                                <Flex justify={'between'} flexShrink='0'>
                                    <Flex>{data.tokens[token.contractAddress].name}</Flex>
                                    <Flex>{formatBalance(token.tokenBalance, data.tokens[token.contractAddress].decimals)} {data.tokens[token.contractAddress].symbol}</Flex>
                                </Flex>
                            </Card>
                        )
                    })
                    }
                </Flex>
            </Card>
        </Flex>
    );
}

export default Home;