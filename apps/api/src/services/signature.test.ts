import { describe, expect, it, jest } from "@jest/globals";
import { isValidSignature } from "./signature";

describe("test signature", () => {
  it("should test", async () => {
    // @ts-ignore
    const { Wallet } = jest.requireActual("ethers");
    const wallet = Wallet.createRandom();
    const message = "This is a LIFI Test";
    const sign = await wallet.signMessage(message);
    const isvalid = isValidSignature(sign, wallet.address);
    expect(isvalid).toBe(true);
  });
});
