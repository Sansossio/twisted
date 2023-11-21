"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiRiot = void 0;
const base_1 = require("../../../base/base");
const base_const_1 = require("../../../base/base.const");
class BaseApiRiot extends base_1.BaseApi {
    constructor() {
        super(...arguments);
        this.game = base_const_1.BaseApiGames.RIOT;
    }
}
exports.BaseApiRiot = BaseApiRiot;
