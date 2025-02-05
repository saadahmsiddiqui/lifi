import jwt from "jsonwebtoken";

export function createJWT(address: string) {
  return jwt.sign({ address }, process.env.JWT_SECRET!);
}
