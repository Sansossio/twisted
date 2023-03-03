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
exports.MatchV5Api = void 0;
const http_status_codes_1 = require("http-status-codes");
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
/**
 * Match methods
 */
class MatchV5Api extends base_api_lol_1.BaseApiLol {
    // Private methods
    generateResponse(error) {
        return {
            rateLimits: error.rateLimits,
            response: []
        };
    }
    /**
     * Get match details
     * @param matchId Match id
     * @param region
     */
    get(matchId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                matchId
            };
            return yield this.request(region, endpoints_1.endpointsV5.Match, params);
        });
    }
    /**
     * Summoner match listing
     * @param puuid Puuid
     * @param region
     * @returns A list of match ids
     */
    list(puuid, region, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                summonerPUUID: puuid
            };
            try {
                return yield this.request(region, endpoints_1.endpointsV5.MatchListing, params, false, query);
            }
            catch (e) {
                if (e.status !== http_status_codes_1.NOT_FOUND) {
                    throw e;
                }
                return this.generateResponse(e);
            }
        });
    }
    timeline(matchId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                matchId
            };
            return this.request(region, endpoints_1.endpointsV5.MatchTimeline, params);
        });
    }
}
exports.MatchV5Api = MatchV5Api;
