export const enum Regions {
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
  PBE = 'PBE'
}

export const enum TftRegions {
  EUROPE = 'europe',
  ASIA = 'asia',
  AMERICAS = 'americas'
}

export function regionToTftRegions (region: Regions): TftRegions {
  switch (region) {
    // America
    case Regions.AMERICA_NORTH:
    case Regions.BRAZIL:
    case Regions.LAT_NORTH:
    case Regions.LAT_SOUTH:
    case Regions.OCEANIA:
      return TftRegions.AMERICAS
    // Europe
    case Regions.EU_EAST:
    case Regions.EU_WEST:
    case Regions.TURKEY:
    case Regions.RUSSIA:
      return TftRegions.EUROPE
    // Asia
    case Regions.JAPAN:
    case Regions.KOREA:
      return TftRegions.ASIA
  }
  throw new Error(`Unexpected region: ${region}`)
}
