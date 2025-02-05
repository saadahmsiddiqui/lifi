"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSignature = isValidSignature;
const ethers_1 = __importDefault(require("ethers"));
function isValidSignature(message, signature, account) {
    const signerAddress = ethers_1.default.verifyMessage(message, signature);
    if (signerAddress.toLowerCase() !== account.toLowerCase()) {
        return false;
    }
    return true;
}
