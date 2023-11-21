"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotApi = void 0;
const base_api_riot_1 = require("./base/base.api.riot");
const account_1 = require("./account/account");
/**
 * Riot Api
 */
class RiotApi extends base_api_riot_1.BaseApiRiot {
    constructor() {
        super(...arguments);
        /**
         * AccountV1 methods
         */
        this.Account = new account_1.AccountV1Api(this.getParam());
    }
}
exports.RiotApi = RiotApi;
