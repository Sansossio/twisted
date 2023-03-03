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
exports.MatchApi = void 0;
const endpoints_1 = require("../../../endpoints/endpoints");
const http_status_codes_1 = require("http-status-codes");
const base_api_lol_1 = require("../base/base.api.lol");
/**
 * Match methods
 */
class MatchApi extends base_api_lol_1.BaseApiLol {
    // Private methods
    generateResponse(error) {
        return {
            rateLimits: error.rateLimits,
            response: {
                matches: [],
                startIndex: 0,
                endIndex: 0,
                totalGames: 0
            }
        };
    }
    map(match) {
        match.response.teams = match.response.teams.map((team) => {
            team.win = String(team.win) === 'Win';
            return team;
        });
        match.response.remake = match.response.teams.every((t) => !t.firstTower);
        return match;
    }
    /**
     * Get match details
     * @param matchId Match id
     * @param region
     * @deprecated
     */
    get(matchId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                matchId
            };
            const data = yield this.request(region, endpoints_1.endpointsV4.Match, params);
            return this.map(data);
        });
    }
    /**
     * Summoner match listing
     * @param encryptedAccountId Encrypted summoner ID. Max length 63 characters.
     * @param region
     * @deprecated
     */
    list(encryptedAccountId, region, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                encryptedAccountId
            };
            try {
                return yield this.request(region, endpoints_1.endpointsV4.MatchListing, params, false, query);
            }
            catch (e) {
                if (e.status !== http_status_codes_1.NOT_FOUND) {
                    throw e;
                }
                return this.generateResponse(e);
            }
        });
    }
    /**
     * Timeline
     * @param matchId
     * @param region
     * @deprecated
     */
    timeline(matchId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                matchId
            };
            return this.request(region, endpoints_1.endpointsV4.MatchTimeline, params);
        });
    }
}
exports.MatchApi = MatchApi;
