import { verifyMessage } from "ethers";

export function isValidSignature(signature: string, account: string) {
  const message = "This is a LIFI Test";
  let isValid = true;

  try {
    const signerAddress = verifyMessage(message, signature);

    if (signerAddress.toLowerCase() !== account.toLowerCase()) {
      isValid = false;
    }
  } catch (error) {
    isValid = false;
  }

  return isValid;
}
