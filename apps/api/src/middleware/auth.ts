import { FastifyRequest } from "fastify";
import { verifyJWT } from "../services/jwt";

type ErrorParams = {
  message: string;
  code: string;
  statusCode: number;
};

export const AuthMissingHeaders: ErrorParams = {
  message: "Unauthorized",
  code: "AUTH003",
  statusCode: 401,
};

export const AuthJWTError: ErrorParams = {
  message: "Unauthorized",
  code: "AUTH004",
  statusCode: 401,
};

class AuthError extends Error {
  code?: string;

  statusCode?: number;

  data?: object;

  constructor(message: string, code?: string, statusCode = 500, data?: object) {
    super(message);
    this.name = "AuthError";
    this.message = message;
    this.code = code;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export const validateHeadersAuth = (req: FastifyRequest): string => {
  const header: string | undefined = req.headers.authorization;
  if (!header) {
    throw new AuthError(
      AuthMissingHeaders.message,
      AuthMissingHeaders.code,
      AuthMissingHeaders.statusCode,
    );
  }
  const accessToken: string = header!.split(" ")[1];
  if (!accessToken) {
    throw new AuthError(
      AuthMissingHeaders.message,
      AuthMissingHeaders.code,
      AuthMissingHeaders.statusCode,
    );
  }
  return accessToken;
};

export const verifyToken = async (
  request: FastifyRequest & { address?: string },
): Promise<boolean> => {
  try {
    const token = validateHeadersAuth(request);
    const decoded = verifyJWT(token);

    request.address = decoded.address;
    return true;
  } catch (err) {
    throw new AuthError(
      AuthJWTError.message,
      AuthJWTError.code,
      AuthJWTError.statusCode,
    );
  }
};

export default { verifyToken };
