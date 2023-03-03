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
exports.ChallengesV1Api = void 0;
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
class ChallengesV1Api extends base_api_lol_1.BaseApiLol {
    /**
     * Get all challenge configurations.
     */
    Configs(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsV1.Config);
        });
    }
    /**
     * Get all challenge percentile distributions.
     */
    Percentiles(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsV1.Percentiles);
        });
    }
    /**
     * Get a challenge configuration.
     */
    ChallengeConfig(challengeId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                challengeId
            };
            return this.request(region, endpoints_1.endpointsV1.ChallengeConfig, params);
        });
    }
    /**
     * Get Leaderboards for a challenge (Chall, GM, Masters).
     */
    Leaderboards(challengeId, level, region, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                challengeId,
                level
            };
            return this.request(region, endpoints_1.endpointsV1.Leaderboards, params, false, query);
        });
    }
    /**
     * Get a challenge percentile distribution.
     */
    ChallengePercentiles(challengeId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                challengeId
            };
            return this.request(region, endpoints_1.endpointsV1.ChallengePercentiles, params);
        });
    }
    /**
     * Get player challenge information.
     */
    PlayerChallenges(puuid, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                summonerPUUID: puuid
            };
            return this.request(region, endpoints_1.endpointsV1.PlayerChallenges, params);
        });
    }
}
exports.ChallengesV1Api = ChallengesV1Api;
