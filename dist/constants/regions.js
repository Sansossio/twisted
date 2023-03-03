"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionToRegionGroup = exports.RegionGroups = exports.Regions = void 0;
var Regions;
(function (Regions) {
    Regions["BRAZIL"] = "BR1";
    Regions["EU_EAST"] = "EUN1";
    Regions["EU_WEST"] = "EUW1";
    Regions["KOREA"] = "KR";
    Regions["LAT_NORTH"] = "LA1";
    Regions["LAT_SOUTH"] = "LA2";
    Regions["AMERICA_NORTH"] = "NA1";
    Regions["OCEANIA"] = "OC1";
    Regions["TURKEY"] = "TR1";
    Regions["RUSSIA"] = "RU";
    Regions["JAPAN"] = "JP1";
    Regions["PBE"] = "PBE1";
})(Regions = exports.Regions || (exports.Regions = {}));
/**
 * As per RIOT Api:
 * - The AMERICAS routing value serves NA, BR, LAN and LAS.
 * - The ASIA routing value serves KR and JP
 * - The EUROPE routing value serves EUNE, EUW, TR, and RU.
 * - The SEA routing value serves OCE
 * Use regionToRegionGroup() to convert them.
 */
var RegionGroups;
(function (RegionGroups) {
    RegionGroups["ASIA"] = "ASIA";
    RegionGroups["AMERICAS"] = "AMERICAS";
    RegionGroups["EUROPE"] = "EUROPE";
    RegionGroups["SEA"] = "SEA";
})(RegionGroups = exports.RegionGroups || (exports.RegionGroups = {}));
function regionToRegionGroup(region) {
    switch (region) {
        // America
        case Regions.AMERICA_NORTH:
        case Regions.BRAZIL:
        case Regions.LAT_NORTH:
        case Regions.LAT_SOUTH:
            return RegionGroups.AMERICAS;
        // Europe
        case Regions.EU_EAST:
        case Regions.EU_WEST:
        case Regions.TURKEY:
        case Regions.RUSSIA:
            return RegionGroups.EUROPE;
        // Asia
        case Regions.JAPAN:
        case Regions.KOREA:
            return RegionGroups.ASIA;
        // Sea
        case Regions.OCEANIA:
            return RegionGroups.SEA;
    }
    throw new Error(`Unexpected region: ${region}`);
}
exports.regionToRegionGroup = regionToRegionGroup;
