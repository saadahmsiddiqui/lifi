import { FastifyRequest } from "fastify";

export type AccountCreationRequest = FastifyRequest<{
  Body: {
    address: string;
    signature: string;
  };
}>;
