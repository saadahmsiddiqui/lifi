"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreate = void 0;
const signature_1 = require("../services/signature");
const message = 'This is a LIFI Test';
const handleCreate = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const isValid = (0, signature_1.isValidSignature)(message, request.body.signature, request.body.address);
    return isValid;
});
exports.handleCreate = handleCreate;
exports.default = {
    handleCreate: exports.handleCreate,
};
