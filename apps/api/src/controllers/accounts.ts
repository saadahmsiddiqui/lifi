import {
    AccountCreationRequest
} from "../types/accounts";

import {
  isValidSignature
} from "../services/signature";


export const handleCreate = async (
  request: AccountCreationRequest
): Promise<boolean> => {
    const isValid = isValidSignature(request.body.signature, request.body.address);
    return isValid;
};

export default {
  handleCreate,
};