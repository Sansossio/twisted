import { Constants } from '../../src'
import { Levels } from '../../src/constants/levels'

export const config = {
  summonerName: 'Hide on Bush',
  region: Constants.Regions.KOREA
}

// ARAM specific
export const configARAM = {
  summonerName: 'Night Owl',
  region: Constants.Regions.AMERICA_NORTH,
  challengeId: 101106, // ARAM Eradication
  level: Levels.CHALLENGER
}

export const configTft = {
  summonerName: 'Zwait',
  region: Constants.Regions.LAT_NORTH,
  tftRegion: Constants.RegionGroups.AMERICAS
}
