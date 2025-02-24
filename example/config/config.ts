import { Constants } from '../../src'
import { Levels } from '../../src/constants/levels'

export const config = {
  summonerName: 'Thebausffs',
  tagLine: 'COOL',
  region: Constants.Regions.EU_WEST,
  regionGroup: Constants.RegionGroups.AMERICAS,
}

export const configTft = {
  summonerName: 'Meinya',
  tagLine: 'NA1',
  region: Constants.Regions.AMERICA_NORTH,
  regionGroup: Constants.RegionGroups.AMERICAS,
  tftRegion: Constants.RegionGroups.AMERICAS
}

// Used for challengeID
export const configChallenges = {
  summonerName: 'Night Owl',
  tagLine: 'ryi',
  region: Constants.Regions.AMERICA_NORTH,
  regionGroup: Constants.RegionGroups.AMERICAS,
  challengeId: 101106, // ARAM Eradication
  level: Levels.CHALLENGER
}