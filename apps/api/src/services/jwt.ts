import jwt from "jsonwebtoken";

export function createJWT(address: string) {
  return jwt.sign({ address }, process.env.JWT_SECRET!);
}

export function verifyJWT(token: string): { address: string } {
  return jwt.verify(token, process.env.JWT_SECRET!) as { address: string };
}
