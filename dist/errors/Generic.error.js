"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericError = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const message = 'Generic error';
/**
 * Not api key found
 */
class GenericError extends Error {
    constructor(rateLimits, error) {
        var _a, _b;
        super(error.message || message);
        this.name = 'GenericError';
        this.status = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || http_status_codes_1.default.INTERNAL_SERVER_ERROR;
        this.body = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data;
        this.rateLimits = rateLimits;
        this.error = error;
        Object.setPrototypeOf(this, GenericError.prototype);
    }
}
exports.GenericError = GenericError;
