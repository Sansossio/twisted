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
exports.MatchTFTApi = void 0;
const base_api_tft_1 = require("../base/base.api.tft");
const endpoints_1 = require("../../../endpoints");
class MatchTFTApi extends base_api_tft_1.BaseApiTft {
    // Public methods
    /**
     * Get match by id
     * @param matchId
     * @param region
     */
    get(matchId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                matchId
            };
            return this.request(region, endpoints_1.endpointsTFTV1.Match, params);
        });
    }
    /**
     * Get match listing
     * @param summonerPUUID
     * @param region
     */
    list(summonerPUUID, region, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                summonerPUUID
            };
            return this.request(region, endpoints_1.endpointsTFTV1.MatchListing, params, false, query);
        });
    }
    /**
     * Get match listing (with details)
     */
    listWithDetails(summonerPUUID, region, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                summonerPUUID
            };
            const response = [];
            // Match list
            const { response: ids } = yield this.list(summonerPUUID, region, query);
            // Load details
            for (const id of ids) {
                const { response: match } = yield this.get(id, region);
                response.push(match);
            }
            return response;
        });
    }
}
exports.MatchTFTApi = MatchTFTApi;
