import { Card, Flex, Text } from "@radix-ui/themes";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useAccountCreation from "../../lib/hooks/useAccountCreation";
import "./Home.css";
import { useTokenBalances } from "../../lib/hooks/useTokenBalances";
import { useAccount } from "wagmi";
import TokenBalance from "../../components/TokenBalance/TokenBalance";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function Home() {
    const { address } = useAccount();
    const { message, error: accountCreationError, loading } = useAccountCreation();
    const { isFetching, data, error: tokenFetchingError } = useTokenBalances();

    if (!address) {
        return (
            <Flex justify='center' align='center'>
                <ConnectButton />
            </Flex>
        )
    }

    if (loading || isFetching) {
        return (<Loading message={isFetching ? "Fetching balances.." : message} />)
    }


    if (accountCreationError || tokenFetchingError) {
        return (<Error message={accountCreationError ? message : "Error fetching balances."} />)        
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

                <Flex className="tokenBalancesContainer" direction="column" flexGrow='1'>
                    {!isFetching && data && data.balances.tokenBalances.length && data.balances.tokenBalances.map((token) => {
                        return (
                            <TokenBalance
                                decimals={data.tokens[token.contractAddress].decimals}
                                symbol={data.tokens[token.contractAddress].symbol}
                                name={data.tokens[token.contractAddress].name}
                                tokenBalance={token.tokenBalance}
                            />
                        )
                    })
                    }
                </Flex>
            </Card>
        </Flex>
    );
}

export default Home;