export enum Regions {
  BRAZIL = 'BR1',
  EU_EAST = 'EUN1',
  EU_WEST = 'EUW1',
  KOREA = 'KR',
  LAT_NORTH = 'LA1',
  LAT_SOUTH = 'LA2',
  AMERICA_NORTH = 'NA1',
  OCEANIA = 'OC1',
  TURKEY = 'TR1',
  RUSSIA = 'RU',
  JAPAN = 'JP1',
  VIETNAM = 'VN2',
  TAIWAN = 'TW2',
  SINGAPORE = 'SG2', 
  MIDDLE_EAST = 'ME1',
  PBE = 'PBE1',
}

/**
 * As per RIOT Api:
 * - The AMERICAS routing value serves NA, BR, LAN and LAS.
 * - The ASIA routing value serves KR and JP
 * - The EUROPE routing value serves EUNE, EUW, TR, and RU.
 * - The SEA routing value serves OCE
 * Use regionToRegionGroup() to convert them.
 */
export enum RegionGroups {
  ASIA = 'ASIA',
  AMERICAS = 'AMERICAS',
  EUROPE = 'EUROPE',
  SEA = 'SEA'
}

// See riot API: There are three routing values for account-v1; americas, asia, and europe. You can query for any account in any region. We recommend using the nearest cluster.
export type AccountAPIRegionGroups = Exclude<RegionGroups, RegionGroups.SEA>;

export function regionToRegionGroup (region: Regions): RegionGroups {
  switch (region) {
    // America
    case Regions.AMERICA_NORTH:
    case Regions.BRAZIL:
    case Regions.LAT_NORTH:
    case Regions.LAT_SOUTH:
      return RegionGroups.AMERICAS
    // Europe
    case Regions.EU_EAST:
    case Regions.EU_WEST:
    case Regions.TURKEY:
    case Regions.RUSSIA:
    case Regions.MIDDLE_EAST:
      return RegionGroups.EUROPE
    // Asia
    case Regions.JAPAN:
    case Regions.KOREA:
      return RegionGroups.ASIA
    // Sea
    case Regions.OCEANIA:
    case Regions.SINGAPORE:
    case Regions.TAIWAN:
    case Regions.VIETNAM:
      return RegionGroups.SEA
  }
  throw new Error(`Unexpected region: ${region}`)
}

export function regionToRegionGroupForAccountAPI(region: Regions): AccountAPIRegionGroups {
  const regionGroup = regionToRegionGroup(region);
  if(regionGroup === RegionGroups.SEA){
    return RegionGroups.ASIA;
  }
  return regionGroup;
}