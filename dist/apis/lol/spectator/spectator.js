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
exports.SpectatorApi = void 0;
const http_status_codes_1 = require("http-status-codes");
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
class SpectatorApi extends base_api_lol_1.BaseApiLol {
    errorHandler(e) {
        const { statusCode } = e.error || e;
        if (statusCode !== http_status_codes_1.NOT_FOUND) {
            throw e;
        }
    }
    /**
     * Get featured games
     * @param region
     */
    featuredGames(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsV4.SpectatorFeaturedGames);
        });
    }
    /**
     * Get summoner active game
     * @param encryptedSummonerId
     * @param region
     */
    activeGame(encryptedSummonerId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                encryptedSummonerId
            };
            try {
                return yield this.request(region, endpoints_1.endpointsV4.SpectatorSummoner, params);
            }
            catch (e) {
                this.errorHandler(e);
                const message = 'No active game found';
                const response = {
                    message
                };
                return response;
            }
        });
    }
}
exports.SpectatorApi = SpectatorApi;
