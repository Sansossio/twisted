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
exports.ThirdPartyCode = void 0;
const http_status_codes_1 = require("http-status-codes");
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
/**
 * Third party methods
 */
class ThirdPartyCode extends base_api_lol_1.BaseApiLol {
    errorHandler(e) {
        const { statusCode } = e.error || e;
        if (statusCode !== http_status_codes_1.INTERNAL_SERVER_ERROR && statusCode !== http_status_codes_1.NOT_FOUND) {
            throw e;
        }
    }
    /**
     * Valid codes must be no longer than 256 characters and only use valid characters: 0-9, a-z, A-Z, and -
     * @param encryptedSummonerId
     * @param region
     */
    get(encryptedSummonerId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            let code;
            let rateLimits;
            const params = {
                encryptedSummonerId
            };
            try {
                const data = yield this.request(region, endpoints_1.endpointsV4.ThirdPartyCode, params);
                rateLimits = data.rateLimits;
                code = data.response;
            }
            catch (e) {
                this.errorHandler(e);
                code = null;
            }
            return {
                rateLimits,
                response: {
                    code
                }
            };
        });
    }
}
exports.ThirdPartyCode = ThirdPartyCode;
