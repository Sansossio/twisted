"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChampionNameCapital = exports.getChampionName = exports.Champions = void 0;
const lodash_1 = require("lodash");
const axios_1 = __importDefault(require("axios"));
// Untyped modules
const { CamelCase } = require('camelcasejs');
/**
 * Champions - Used as fallback
 */
var Champions;
(function (Champions) {
    Champions[Champions["EMPTY_CHAMPION"] = 0] = "EMPTY_CHAMPION";
    Champions[Champions["ANNIE"] = 1] = "ANNIE";
    Champions[Champions["OLAF"] = 2] = "OLAF";
    Champions[Champions["GALIO"] = 3] = "GALIO";
    Champions[Champions["TWISTED_FATE"] = 4] = "TWISTED_FATE";
    Champions[Champions["XIN_ZHAO"] = 5] = "XIN_ZHAO";
    Champions[Champions["URGOT"] = 6] = "URGOT";
    Champions[Champions["LEBLANC"] = 7] = "LEBLANC";
    Champions[Champions["VLADIMIR"] = 8] = "VLADIMIR";
    Champions[Champions["FIDDLESTICKS"] = 9] = "FIDDLESTICKS";
    Champions[Champions["KAYLE"] = 10] = "KAYLE";
    Champions[Champions["MASTER_YI"] = 11] = "MASTER_YI";
    Champions[Champions["ALISTAR"] = 12] = "ALISTAR";
    Champions[Champions["RYZE"] = 13] = "RYZE";
    Champions[Champions["SION"] = 14] = "SION";
    Champions[Champions["SIVIR"] = 15] = "SIVIR";
    Champions[Champions["SORAKA"] = 16] = "SORAKA";
    Champions[Champions["TEEMO"] = 17] = "TEEMO";
    Champions[Champions["TRISTANA"] = 18] = "TRISTANA";
    Champions[Champions["WARWICK"] = 19] = "WARWICK";
    Champions[Champions["NUNU"] = 20] = "NUNU";
    Champions[Champions["MISS_FORTUNE"] = 21] = "MISS_FORTUNE";
    Champions[Champions["ASHE"] = 22] = "ASHE";
    Champions[Champions["TRYNDAMERE"] = 23] = "TRYNDAMERE";
    Champions[Champions["JAX"] = 24] = "JAX";
    Champions[Champions["MORGANA"] = 25] = "MORGANA";
    Champions[Champions["ZILEAN"] = 26] = "ZILEAN";
    Champions[Champions["SINGED"] = 27] = "SINGED";
    Champions[Champions["EVELYNN"] = 28] = "EVELYNN";
    Champions[Champions["TWITCH"] = 29] = "TWITCH";
    Champions[Champions["KARTHUS"] = 30] = "KARTHUS";
    Champions[Champions["CHOGATH"] = 31] = "CHOGATH";
    Champions[Champions["AMUMU"] = 32] = "AMUMU";
    Champions[Champions["RAMMUS"] = 33] = "RAMMUS";
    Champions[Champions["ANIVIA"] = 34] = "ANIVIA";
    Champions[Champions["SHACO"] = 35] = "SHACO";
    Champions[Champions["DR_MUNDO"] = 36] = "DR_MUNDO";
    Champions[Champions["SONA"] = 37] = "SONA";
    Champions[Champions["KASSADIN"] = 38] = "KASSADIN";
    Champions[Champions["IRELIA"] = 39] = "IRELIA";
    Champions[Champions["JANNA"] = 40] = "JANNA";
    Champions[Champions["GANGPLANK"] = 41] = "GANGPLANK";
    Champions[Champions["CORKI"] = 42] = "CORKI";
    Champions[Champions["KARMA"] = 43] = "KARMA";
    Champions[Champions["TARIC"] = 44] = "TARIC";
    Champions[Champions["VEIGAR"] = 45] = "VEIGAR";
    Champions[Champions["TRUNDLE"] = 48] = "TRUNDLE";
    Champions[Champions["SWAIN"] = 50] = "SWAIN";
    Champions[Champions["CAITLYN"] = 51] = "CAITLYN";
    Champions[Champions["BLITZCRANK"] = 53] = "BLITZCRANK";
    Champions[Champions["MALPHITE"] = 54] = "MALPHITE";
    Champions[Champions["KATARINA"] = 55] = "KATARINA";
    Champions[Champions["NOCTURNE"] = 56] = "NOCTURNE";
    Champions[Champions["MAOKAI"] = 57] = "MAOKAI";
    Champions[Champions["RENEKTON"] = 58] = "RENEKTON";
    Champions[Champions["JARVAN_IV"] = 59] = "JARVAN_IV";
    Champions[Champions["ELISE"] = 60] = "ELISE";
    Champions[Champions["ORIANNA"] = 61] = "ORIANNA";
    Champions[Champions["MONKEY_KING"] = 62] = "MONKEY_KING";
    Champions[Champions["BRAND"] = 63] = "BRAND";
    Champions[Champions["LEE_SIN"] = 64] = "LEE_SIN";
    Champions[Champions["VAYNE"] = 67] = "VAYNE";
    Champions[Champions["RUMBLE"] = 68] = "RUMBLE";
    Champions[Champions["CASSIOPEIA"] = 69] = "CASSIOPEIA";
    Champions[Champions["SKARNER"] = 72] = "SKARNER";
    Champions[Champions["HEIMERDINGER"] = 74] = "HEIMERDINGER";
    Champions[Champions["NASUS"] = 75] = "NASUS";
    Champions[Champions["NIDALEE"] = 76] = "NIDALEE";
    Champions[Champions["UDYR"] = 77] = "UDYR";
    Champions[Champions["POPPY"] = 78] = "POPPY";
    Champions[Champions["GRAGAS"] = 79] = "GRAGAS";
    Champions[Champions["PANTHEON"] = 80] = "PANTHEON";
    Champions[Champions["EZREAL"] = 81] = "EZREAL";
    Champions[Champions["MORDEKAISER"] = 82] = "MORDEKAISER";
    Champions[Champions["YORICK"] = 83] = "YORICK";
    Champions[Champions["AKALI"] = 84] = "AKALI";
    Champions[Champions["KENNEN"] = 85] = "KENNEN";
    Champions[Champions["GAREN"] = 86] = "GAREN";
    Champions[Champions["LEONA"] = 89] = "LEONA";
    Champions[Champions["MALZAHAR"] = 90] = "MALZAHAR";
    Champions[Champions["TALON"] = 91] = "TALON";
    Champions[Champions["RIVEN"] = 92] = "RIVEN";
    Champions[Champions["KOG_MAW"] = 96] = "KOG_MAW";
    Champions[Champions["SHEN"] = 98] = "SHEN";
    Champions[Champions["LUX"] = 99] = "LUX";
    Champions[Champions["XERATH"] = 101] = "XERATH";
    Champions[Champions["SHYVANA"] = 102] = "SHYVANA";
    Champions[Champions["AHRI"] = 103] = "AHRI";
    Champions[Champions["GRAVES"] = 104] = "GRAVES";
    Champions[Champions["FIZZ"] = 105] = "FIZZ";
    Champions[Champions["VOLIBEAR"] = 106] = "VOLIBEAR";
    Champions[Champions["RENGAR"] = 107] = "RENGAR";
    Champions[Champions["VARUS"] = 110] = "VARUS";
    Champions[Champions["NAUTILUS"] = 111] = "NAUTILUS";
    Champions[Champions["VIKTOR"] = 112] = "VIKTOR";
    Champions[Champions["SEJUANI"] = 113] = "SEJUANI";
    Champions[Champions["FIORA"] = 114] = "FIORA";
    Champions[Champions["ZIGGS"] = 115] = "ZIGGS";
    Champions[Champions["LULU"] = 117] = "LULU";
    Champions[Champions["DRAVEN"] = 119] = "DRAVEN";
    Champions[Champions["HECARIM"] = 120] = "HECARIM";
    Champions[Champions["KHAZIX"] = 121] = "KHAZIX";
    Champions[Champions["DARIUS"] = 122] = "DARIUS";
    Champions[Champions["JAYCE"] = 126] = "JAYCE";
    Champions[Champions["LISSANDRA"] = 127] = "LISSANDRA";
    Champions[Champions["DIANA"] = 131] = "DIANA";
    Champions[Champions["QUINN"] = 133] = "QUINN";
    Champions[Champions["SYNDRA"] = 134] = "SYNDRA";
    Champions[Champions["AURELION_SOL"] = 136] = "AURELION_SOL";
    Champions[Champions["KAYN"] = 141] = "KAYN";
    Champions[Champions["ZOE"] = 142] = "ZOE";
    Champions[Champions["ZYRA"] = 143] = "ZYRA";
    Champions[Champions["KAISA"] = 145] = "KAISA";
    Champions[Champions["GNAR"] = 150] = "GNAR";
    Champions[Champions["ZAC"] = 154] = "ZAC";
    Champions[Champions["YASUO"] = 157] = "YASUO";
    Champions[Champions["VELKOZ"] = 161] = "VELKOZ";
    Champions[Champions["TALIYAH"] = 163] = "TALIYAH";
    Champions[Champions["CAMILLE"] = 164] = "CAMILLE";
    Champions[Champions["BRAUM"] = 201] = "BRAUM";
    Champions[Champions["JHIN"] = 202] = "JHIN";
    Champions[Champions["KINDRED"] = 203] = "KINDRED";
    Champions[Champions["JINX"] = 222] = "JINX";
    Champions[Champions["TAHM_KENCH"] = 223] = "TAHM_KENCH";
    Champions[Champions["LUCIAN"] = 236] = "LUCIAN";
    Champions[Champions["ZED"] = 238] = "ZED";
    Champions[Champions["KLED"] = 240] = "KLED";
    Champions[Champions["EKKO"] = 245] = "EKKO";
    Champions[Champions["QIYANA"] = 246] = "QIYANA";
    Champions[Champions["VI"] = 254] = "VI";
    Champions[Champions["AATROX"] = 266] = "AATROX";
    Champions[Champions["NAMI"] = 267] = "NAMI";
    Champions[Champions["AZIR"] = 268] = "AZIR";
    Champions[Champions["YUUMI"] = 350] = "YUUMI";
    Champions[Champions["THRESH"] = 412] = "THRESH";
    Champions[Champions["ILLAOI"] = 420] = "ILLAOI";
    Champions[Champions["REKSAI"] = 421] = "REKSAI";
    Champions[Champions["IVERN"] = 427] = "IVERN";
    Champions[Champions["KALISTA"] = 429] = "KALISTA";
    Champions[Champions["BARD"] = 432] = "BARD";
    Champions[Champions["RAKAN"] = 497] = "RAKAN";
    Champions[Champions["XAYAH"] = 498] = "XAYAH";
    Champions[Champions["ORNN"] = 516] = "ORNN";
    Champions[Champions["SYLAS"] = 517] = "SYLAS";
    Champions[Champions["NEEKO"] = 518] = "NEEKO";
    Champions[Champions["APHELIOS"] = 523] = "APHELIOS";
    Champions[Champions["PYKE"] = 555] = "PYKE";
    Champions[Champions["SENNA"] = 235] = "SENNA";
    Champions[Champions["SETT"] = 875] = "SETT";
    Champions[Champions["LILLIA"] = 876] = "LILLIA";
    Champions[Champions["YONE"] = 777] = "YONE";
    Champions[Champions["SAMIRA"] = 360] = "SAMIRA";
    Champions[Champions["SERAPHINE"] = 147] = "SERAPHINE";
    Champions[Champions["RELL"] = 526] = "RELL";
    Champions[Champions["VIEGO"] = 234] = "VIEGO";
    Champions[Champions["GWEN"] = 887] = "GWEN";
})(Champions = exports.Champions || (exports.Champions = {}));
const championIdMap = lodash_1.invert(Champions);
/**
 * Fetching champion IDs from CommunityDragon's PBE content. See https://www.communitydragon.org/
 */
if (process.env.UPDATE_CHAMPION_IDS) {
    const updateChampionIDs = () => {
        const CD_CHAMPIONS = 'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json';
        try {
            void axios_1.default(CD_CHAMPIONS)
                .then(({ data: cdChamps }) => {
                cdChamps.forEach(({ id, alias }) => {
                    const championAlias = alias.replace(/[a-z][A-Z]/g, letter => letter[0] + '_' + letter[1]).toUpperCase();
                    if (!championIdMap[id]) {
                        championIdMap[id] = championIdMap[id] || championAlias;
                        championIdMap[championAlias] = championIdMap[championAlias] || '' + id;
                    }
                });
            });
        }
        catch (e) {
            console.warn('Updating champion IDs failed');
        }
    };
    // Schedule once every day.
    setInterval(updateChampionIDs, 1000 * 60 * 60 * 24);
    updateChampionIDs();
}
/**
 * Get champion name by id
 */
function getChampionName(champ) {
    const result = championIdMap[champ];
    if (!result) {
        throw new Error(`Invalid champ id ${champ}`);
    }
    return result;
}
exports.getChampionName = getChampionName;
/**
 * Get champion and by id and return capitalize string
 */
function getChampionNameCapital(champ) {
    let name = typeof champ === 'number' ? getChampionName(champ) : champ;
    name = CamelCase(name.toLowerCase());
    name = name.charAt(0).toUpperCase() + name.slice(1);
    switch (name) {
        case 'Reksai':
            return 'RekSai';
        case 'JarvanIv':
            return 'JarvanIV';
    }
    return name;
}
exports.getChampionNameCapital = getChampionNameCapital;
