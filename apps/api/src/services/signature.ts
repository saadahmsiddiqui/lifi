import { verifyMessage } from "ethers";

export function isValidSignature(signature: string, account: string) {
  let isValid = true;

  try {
    const signerAddress = verifyMessage(process.env.MESSAGE_TO_SIGN!, signature);

    if (signerAddress.toLowerCase() !== account.toLowerCase()) {
      isValid = false;
    }
  } catch (error) {
    isValid = false;
  }

  return isValid;
}
