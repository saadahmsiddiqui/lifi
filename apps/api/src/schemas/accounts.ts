export const ACCOUNTS_CREATION_SCHEMA = {
  $id: "createAccountSchema",
  type: "object",
  required: ["address", "signature"],
  properties: {
    address: { type: "string" },
    signature: { type: "string" },
  },
};
