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
exports.StatusV4Api = void 0;
const endpoints_1 = require("../../../endpoints");
const base_api_lol_1 = require("../base/base.api.lol");
class StatusV4Api extends base_api_lol_1.BaseApiLol {
    /**
     * Lol status by server
     * @param region Riot region
     */
    get(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(region, endpoints_1.endpointsV4.LolStatus);
        });
    }
}
exports.StatusV4Api = StatusV4Api;
