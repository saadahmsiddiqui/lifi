import { Flex } from "@radix-ui/themes";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { updateScore } from "../../lib/api";

function Leaderboard() {
    const { loggedIn }= useAppContext();

    useEffect(() => {
        if (loggedIn) {
            updateScore();
        }
    }, [loggedIn])

    return (
        <Flex justify='center' align='center' >
            Leaderboard
        </Flex>
    );
}

export default Leaderboard;