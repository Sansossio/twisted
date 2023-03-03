"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TFTStaticFiles = void 0;
const champions_json_1 = __importDefault(require("./files/champions.json"));
const hexes_json_1 = __importDefault(require("./files/hexes.json"));
const items_json_1 = __importDefault(require("./files/items.json"));
const traits_json_1 = __importDefault(require("./files/traits.json"));
class TFTStaticFiles {
    Champions() {
        return champions_json_1.default;
    }
    Hexes() {
        return hexes_json_1.default;
    }
    Items() {
        return items_json_1.default;
    }
    Traits() {
        return traits_json_1.default;
    }
}
exports.TFTStaticFiles = TFTStaticFiles;
