import { Flex } from "@radix-ui/themes";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { updateScore } from "../../lib/api";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

function LeaderboardPage() {
    const { loggedIn }= useAppContext();

    useEffect(() => {
        if (loggedIn) {
            updateScore();
        }
    }, [loggedIn])

    return (
        <Flex justify='center' align='center' >
            <Leaderboard />
        </Flex>
    );
}

export default LeaderboardPage;