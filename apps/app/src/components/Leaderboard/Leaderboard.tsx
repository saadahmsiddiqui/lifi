import { Card, Flex, Text } from "@radix-ui/themes";
import "./Leaderboard.css";

interface LeaderboardProps {
    leaderboard: string[];
}

function Leaderboard({ leaderboard }: LeaderboardProps) {
    return (
        <Flex justify='center' align='center' >
            <Card variant="surface" className="tokensCard">
                <Text>App Leaderboard</Text>

                <Flex className="tokenBalancesContainer" direction="column" flexGrow='1'>
                    {leaderboard && leaderboard.length && leaderboard.map((addr, idx) => {
                        return (
                            <Card className="tokenBalanceItem" key={addr} mt="3">
                                <Flex justify={'between'} flexShrink='0'>
                                    <Flex className="tokenBalanceItem__addr" id={addr}>{idx + 1}. {addr}</Flex>
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