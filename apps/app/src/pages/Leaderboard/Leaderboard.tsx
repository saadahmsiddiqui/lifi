import { Flex, Spinner, Text } from "@radix-ui/themes";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { fetchLeaderboard, updateScore } from "../../lib/api";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function LeaderboardPage() {
    const { loggedIn }= useAppContext();
    const { error, data, isFetching } = useQuery({
        queryKey: ['leaderBoard'],
        queryFn: fetchLeaderboard,
      })

    useEffect(() => {
        if (loggedIn) {
            updateScore();
        }
    }, [loggedIn])

    if (isFetching) {
        return (
            <Loading message="Fetching leaderboard.." />
        )
    }
    
    if (error) {
        return (
            <Error message="Error fetching leaderboard." />
        )
    }

    return (
        <Flex justify='center' align='center' >
            <Leaderboard leaderboard={data ?? []} />
        </Flex>
    );
}

export default LeaderboardPage;