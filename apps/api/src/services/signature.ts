import { verifyMessage } from "ethers";

export function isValidSignature(signature: string, account: string) {
    const message = 'This is a LIFI Test';
    const signerAddress = verifyMessage(message, signature);
    
    if (signerAddress.toLowerCase() !== account.toLowerCase()) {
        return false;
    }

    return true;
}