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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDragonService = void 0;
const axios_1 = __importDefault(require("axios"));
const dataDragon_1 = require("../../../constants/dataDragon");
const champions_1 = require("../../../constants/champions");
const defaultLang = 'en_US';
/**
 * Data Dragon is our way of centralizing League of Legends game data and assets, including champions, items, runes, summoner spells, and profile icons. All of which can be used by third-party developers. You can download a gzipped tar file (.tar.gz) for each patch which will contain all assets for that patch.
 * https://ddragon.Lol.com/cdn/dragontail-9.20.1.tgz
 * Please be aware that updating Data Dragon after each League of Legends patch is a manual process, so it is not always updated immediately after a patch. Your patience is appreciated.
 */
class DataDragonService {
    // Internal methods
    request(path, base = dataDragon_1.DataDragonEnum.BASE) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                url: `${base}/${path}`,
                method: 'GET'
            };
            return (yield axios_1.default(options)).data;
        });
    }
    // Riot requests
    // Data dragon
    getRealms(server) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `realms/${server}.json`;
            return this.request(path);
        });
    }
    getVersions() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = 'api/versions.json';
            return this.request(path);
        });
    }
    getLanguages() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = 'cdn/languages.json';
            return this.request(path);
        });
    }
    /**
     * Runes reforged (perks)
     */
    getRunesReforged() {
        return __awaiter(this, void 0, void 0, function* () {
            const version = (yield this.getVersions())[0];
            const path = `cdn/${version}/data/${defaultLang}/runesReforged.json`;
            return this.request(path);
        });
    }
    getChampion(champ) {
        return __awaiter(this, void 0, void 0, function* () {
            const version = (yield this.getVersions())[0];
            let champName = '';
            let path = `cdn/${version}/data/${defaultLang}/champion`;
            if (champ) {
                champName = champions_1.getChampionNameCapital(champ);
                path += `/${champName}.json`;
            }
            else {
                path += '.json';
            }
            const fullResponse = yield this.request(path);
            if (champ) {
                const response = fullResponse.data[champName];
                return response;
            }
            return fullResponse;
        });
    }
    // Static data
    getQueues() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = 'docs/lol/queues.json';
            return this.request(path, dataDragon_1.DataDragonEnum.STATIC);
        });
    }
    getSeasons() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = 'docs/lol/seasons.json';
            return this.request(path, dataDragon_1.DataDragonEnum.STATIC);
        });
    }
    getMaps() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = 'docs/lol/maps.json';
            return this.request(path, dataDragon_1.DataDragonEnum.STATIC);
        });
    }
    getGameModes() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = 'docs/lol/gameModes.json';
            return this.request(path, dataDragon_1.DataDragonEnum.STATIC);
        });
    }
    getGameTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = 'docs/lol/gameTypes.json';
            return this.request(path, dataDragon_1.DataDragonEnum.STATIC);
        });
    }
}
exports.DataDragonService = DataDragonService;
