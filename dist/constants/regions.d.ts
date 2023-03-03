export declare enum Regions {
    BRAZIL = "BR1",
    EU_EAST = "EUN1",
    EU_WEST = "EUW1",
    KOREA = "KR",
    LAT_NORTH = "LA1",
    LAT_SOUTH = "LA2",
    AMERICA_NORTH = "NA1",
    OCEANIA = "OC1",
    TURKEY = "TR1",
    RUSSIA = "RU",
    JAPAN = "JP1",
    PBE = "PBE1"
}
/**
 * As per RIOT Api:
 * - The AMERICAS routing value serves NA, BR, LAN and LAS.
 * - The ASIA routing value serves KR and JP
 * - The EUROPE routing value serves EUNE, EUW, TR, and RU.
 * - The SEA routing value serves OCE
 * Use regionToRegionGroup() to convert them.
 */
export declare enum RegionGroups {
    ASIA = "ASIA",
    AMERICAS = "AMERICAS",
    EUROPE = "EUROPE",
    SEA = "SEA"
}
export declare function regionToRegionGroup(region: Regions): RegionGroups;
