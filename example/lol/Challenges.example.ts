import { LolApi } from '../../src/apis/lol/lol'
import { Regions } from '../../src/constants'
import { Levels } from '../../src/constants/levels'

export async function challengesV1Example() {
   const api = new LolApi()

   const puuid = 'KGN0ZR8dNoUTFk57zZEsnmevV5mBiVc0Kpzn5IbMbiCM3BvrqWAXcrEj73tHS71YYSOmVz7SH75aDg'
   const challengeId = 101000
   const rank = Levels.CHALLENGER

   const playerChallenges = (await api.Challenge.PlayerChallenges(puuid, Regions.AMERICA_NORTH)).response
   console.log('Player Challenges', playerChallenges)

   const config = (await api.Challenge.Config(Regions.AMERICA_NORTH)).response
   console.log("Config for all basic challenges:", config)

   const percentiles = (await api.Challenge.Percentiles(Regions.AMERICA_NORTH)).response
   console.log("Percentile of players who have acheived challenges:", percentiles)

   const challengeConfig = (await api.Challenge.ChallengeConfig(challengeId, Regions.AMERICA_NORTH)).response
   console.log(`Challenge Configuration for ${challengeId}:`, challengeConfig)

   const challengeLeaderboards = (await api.Challenge.ChallengeLeaderboards(challengeId, rank, Regions.AMERICA_NORTH)).response
   console.log(`Leaderboard for ${challengeId} for ${rank}`, challengeLeaderboards)

   const ChallengePercentiles = (await api.Challenge.ChallengePercentiles(challengeId, Regions.AMERICA_NORTH)).response
   console.log(`Percentile for ${challengeId}`, ChallengePercentiles)
}