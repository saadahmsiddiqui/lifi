import { AccountCreationRequest } from "../types/accounts";

import { isValidSignature } from "../services/signature";
import { FastifyReply } from "fastify";
import { createJWT } from "../services/jwt";

export const handleCreate = async (
  request: AccountCreationRequest,
  reply: FastifyReply,
): Promise<boolean> => {
  const { signature, address } = request.body;
  const isValid = isValidSignature(signature, address);
  if (isValid) {
    return reply.status(200).send({
      jwt: createJWT(address),
    });
  } else {
    return reply.status(400).send({
      ok: false,
      message: "Unable to verify message",
    });
  }
};

export default {
  handleCreate,
};
