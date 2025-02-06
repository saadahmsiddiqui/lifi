import { Card, Flex, Spinner, Text } from "@radix-ui/themes";
import "./Leaderboard.css";
import { fetchLeaderboard } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";

function Leaderboard() {
    const { status, data, error, isFetching } = useQuery({
        queryKey: ['leaderBoard'],
        queryFn: fetchLeaderboard,
      })

    console.log(status, error, data)

    return (
        <Flex justify='center' align='center' >
            <Card variant="surface" className="tokensCard">
                <Text>App Leaderboard</Text>

                <Flex className="tokenBalancesContainer" direction="column" justify={isFetching ? "center" : undefined} align={isFetching ? "center" : undefined} flexGrow='1'>
                    {isFetching && <Flex justify='center' align='center'><Spinner className="spinner" size='3' /><Text ml={'2'}>Fetching Leaderboard</Text></Flex>}
                    {!isFetching && data && data.length && data.map((addr, idx) => {
                        return (
                            <Card className="tokenBalanceItem" key={addr} mt="3">
                                <Flex justify={'between'} flexShrink='0'>
                                    <Flex>{idx + 1}. {addr}</Flex>
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

export default Leaderboard;