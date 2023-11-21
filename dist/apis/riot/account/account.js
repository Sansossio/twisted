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
exports.AccountV1Api = void 0;
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_riot_1 = require("../base/base.api.riot");
class AccountV1Api extends base_api_riot_1.BaseApiRiot {
    /**
    * Get by PUUID
    * @param puuid
    *
    */
    getByPUUID(puuid, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                summonerPUUID: puuid
            };
            return this.request(region, endpoints_1.endpointsRiotV1.AccountPUUID, params);
        });
    }
    /**
    * Get by RiotId
    * @param puuid
    *
    */
    getByRiotId(gameName, tagLine, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                gameName,
                tagLine
            };
            return this.request(region, endpoints_1.endpointsRiotV1.RiotId, params);
        });
    }
}
exports.AccountV1Api = AccountV1Api;
