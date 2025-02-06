import { useCallback, useEffect } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { createAcount } from "../api";
import { useAppContext } from "../../context/AppContext";

export default function useAccountCreation() {
    const { address } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { setIsLoggedIn } = useAppContext();
    const { loggedIn, accountCreationState, setAccountCreationState } = useAppContext();

    const onMessageSigned = useCallback((signature: string) => {
        if (address) { 
            setAccountCreationState?.({
                loading: true,
                message: 'Logging in',
                error: null,
                success: false
            })
            createAcount(address, signature).then((_data) => {
                setIsLoggedIn?.(true);
                setAccountCreationState?.({
                    loading: false,
                    message: 'Logged in',
                    error: null,
                    success: true
                })
            }).catch((err) => {
                setAccountCreationState?.({
                    loading: false,
                    message: 'Something went wrong, please try again later',
                    error: err,
                    success: false
                })
            })
        }
    }, [accountCreationState, address])

    useEffect(() => {
        if (address && !loggedIn) {
            setAccountCreationState?.({
                loading: true,
                message: 'Please sign message for authorization',
                error: null,
                success: false
            })
            signMessageAsync({
                account: address,
                message: import.meta.env.VITE_MESSAGE_TO_SIGN
            }).then(signature => {
                onMessageSigned(signature)
            }).catch((err) => {
                setAccountCreationState?.({
                    loading: false,
                    message: 'Signing message failed',
                    error: err,
                    success: false
                })
            })
        } else if (!address) {
            setAccountCreationState?.({
                loading: false,
                message: 'Please connect wallet',
                error: null,
                success:false
            })
            setIsLoggedIn?.(false)
        }

    }, [address]);

    return {
        ...accountCreationState
    }
}