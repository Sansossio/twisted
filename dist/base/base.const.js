"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiGames = exports.BaseConstants = void 0;
var BaseConstants;
(function (BaseConstants) {
    BaseConstants[BaseConstants["RATE_LIMIT"] = 1] = "RATE_LIMIT";
    BaseConstants[BaseConstants["RETRY_ATTEMPTS"] = 1] = "RETRY_ATTEMPTS";
    BaseConstants[BaseConstants["SERVICE_UNAVAILABLE"] = 4] = "SERVICE_UNAVAILABLE";
    /** $(region) can be Regions or RegionGroups, depending on api version. */
    BaseConstants["BASE_URL"] = "https://$(region).api.riotgames.com/:game";
})(BaseConstants = exports.BaseConstants || (exports.BaseConstants = {}));
var BaseApiGames;
(function (BaseApiGames) {
    BaseApiGames["LOL"] = "lol";
    BaseApiGames["TFT"] = "tft";
})(BaseApiGames = exports.BaseApiGames || (exports.BaseApiGames = {}));
