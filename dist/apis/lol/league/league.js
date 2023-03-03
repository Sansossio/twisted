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
exports.LeagueApi = void 0;
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
/**
 * League methods
 */
class LeagueApi extends base_api_lol_1.BaseApiLol {
    /**
     * Get summoner leagues
     * @param encryptedSummonerId Encrypted summoner ID. Max length 63 characters.
     * @param region
     */
    bySummoner(encryptedSummonerId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                encryptedSummonerId
            };
            return this.request(region, endpoints_1.endpointsV4.SummonerLeague, params);
        });
    }
    /**
     * Top league exp
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param tier
     * @param division
     * @param region
     */
    exp(queue, tier, division, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                queue,
                tier,
                division
            };
            return this.request(region, endpoints_1.endpointsV4.LeagueExp, params);
        });
    }
    /**
     * League entries
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param tier
     * @param division
     * @param region
     * @param page defaults to 1
     */
    entries(queue, tier, division, region, page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                queue,
                tier,
                division
            };
            return this.request(region, endpoints_1.endpointsV4.LeagueEntries, params, false, { page });
        });
    }
    /**
     * Get league by id
     * @param leagueId
     * @param region
     */
    get(leagueId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                leagueId
            };
            return this.request(region, endpoints_1.endpointsV4.League, params);
        });
    }
    /**
     * Get challenger league by queue
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param region
     */
    getChallengerLeaguesByQueue(queue, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                queue
            };
            return this.request(region, endpoints_1.endpointsV4.ChallengerLeaguesByQueue, params);
        });
    }
    /**
     * Get grandmaster league by queue
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param region
     */
    getGrandMasterLeagueByQueue(queue, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                queue
            };
            return this.request(region, endpoints_1.endpointsV4.GrandMasterLeaguesByQueue, params);
        });
    }
    /**
     * Get master league by queue
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param region
     */
    getMasterLeagueByQueue(queue, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                queue
            };
            return this.request(region, endpoints_1.endpointsV4.MasterLeaguesByQueue, params);
        });
    }
}
exports.LeagueApi = LeagueApi;
