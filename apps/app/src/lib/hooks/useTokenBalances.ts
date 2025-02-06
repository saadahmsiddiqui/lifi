import { useQuery } from "@tanstack/react-query";
import { fetchTokenBalances } from "../api";
import { useAppContext } from "../../context/AppContext";

export function useTokenBalances() {
    const { loggedIn } = useAppContext();
    const { status, data, error, isFetching } = useQuery({
        queryKey: ['tokenBalances'],
        queryFn: fetchTokenBalances,
        enabled: loggedIn
      })

    return {
        status,
        isFetching,
        data,
        error
    }
}