"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LolApi = void 0;
const match_1 = require("./match/match");
const league_1 = require("./league/league");
const summoner_1 = require("./summoner/summoner");
const thirdPartyCode_1 = require("./thirdPartyCode/thirdPartyCode");
const champion_1 = require("./champion/champion");
const spectator_1 = require("./spectator/spectator");
const status_1 = require("./status/status");
const DataDragonService_1 = require("./dataDragon/DataDragonService");
const seed_1 = require("./seed/seed");
const base_api_lol_1 = require("./base/base.api.lol");
const clash_api_lol_1 = require("./clash/clash.api.lol");
const match_v5_1 = require("./match/match-v5");
const status_v4_1 = require("./status/status-v4");
const challenges_1 = require("./challenges/challenges");
/**
 * Classic league of legends api
 */
class LolApi extends base_api_lol_1.BaseApiLol {
    constructor() {
        super(...arguments);
        /**
         * ChallengesV1 methods
         */
        this.Challenges = new challenges_1.ChallengesV1Api(this.getParam());
        /**
         * Match methods
         * @deprecated use v5 instead
         */
        this.Match = new match_1.MatchApi(this.getParam());
        /**
         * MatchV5 methods
         */
        this.MatchV5 = new match_v5_1.MatchV5Api(this.getParam());
        /**
         * League methods
         */
        this.League = new league_1.LeagueApi(this.getParam());
        /**
         * Summoner methods
         */
        this.Summoner = new summoner_1.SummonerApi(this.getParam());
        /**
         * Third Party methods
         */
        this.ThirdPartyCode = new thirdPartyCode_1.ThirdPartyCode(this.getParam());
        /**
         * Champion mastery
         */
        this.Champion = new champion_1.ChampionApi(this.getParam());
        /**
         * Spectator methods
         */
        this.Spectator = new spectator_1.SpectatorApi(this.getParam());
        /**
         * Status methods
         * @deprecated Use StatusV4 instead
         */
        this.Status = new status_1.StatusApi(this.getParam());
        /**
         * StatusV4 methods
         */
        this.StatusV4 = new status_v4_1.StatusV4Api(this.getParam());
        /**
         * Clash methods
         */
        this.Clash = new clash_api_lol_1.ClashApi(this.getParam());
        /**
         * Data dragon
         */
        this.DataDragon = new DataDragonService_1.DataDragonService();
        /**
         * Seed methods
         */
        this.Seed = new seed_1.SeedApi();
    }
}
exports.LolApi = LolApi;
