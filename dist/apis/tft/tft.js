"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TftApi = void 0;
const base_api_tft_1 = require("./base/base.api.tft");
const match_tft_1 = require("./match/match.tft");
const summoner_1 = require("./summoner/summoner");
const static_1 = require("./static/static");
const league_tft_1 = require("./league/league.tft");
/**
 * TFT Api
 */
class TftApi extends base_api_tft_1.BaseApiTft {
    constructor() {
        super(...arguments);
        /**
         * Match methods
         */
        this.Match = new match_tft_1.MatchTFTApi(this.getParam());
        /**
         * Summoner methods
         */
        this.Summoner = new summoner_1.SummonerTftApi(this.getParam());
        /**
         * League methods
         */
        this.League = new league_tft_1.LeagueTFTApi(this.getParam());
        /**
         * Static files
         */
        this.StaticFiles = new static_1.TFTStaticFiles();
    }
}
exports.TftApi = TftApi;
