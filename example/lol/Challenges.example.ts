import { LolApi } from '../../src/apis/lol/lol'
import { Constants } from '../../src'
import { Levels } from '../../src/constants/levels'

export async function challengesV1Example() {
   const api = new LolApi()

   // ARAM specific
   const user = {
      summonerName: 'Night Owl',
      region: Constants.Regions.AMERICA_NORTH,
      challengeId: 101106, // ARAM Eradication
      level: Levels.CHALLENGER
   }

   const { response: { puuid } } = await api.Summoner.getByName(user.summonerName, user.region)

   const playerChallenges = (await api.Challenges.PlayerChallenges(puuid, user.region)).response
   // console.log('Found total challenge points:', playerChallenges.totalPoints)

   const leaderboards = (await api.Challenges.Leaderboards(user.challengeId, user.level, user.region, { limit: 5 })).response
   // console.log(`Top 5 ${user.level} for ARAM Eradication for `, leaderboards)

   const configs = (await api.Challenges.Configs(user.region)).response
   // console.log("Config thresholds for the first of all basic challenges:", configs[0])

   const config = (await api.Challenges.ChallengeConfig(user.challengeId, user.region)).response
   // console.log('Challenge Configuration for ARAM Eradication', config)

   const distributions = (await api.Challenges.Percentiles(user.region)).response
   // console.log("Distribution for ARAM Eradication:", distributions[user.challengeId])

   const distribution = (await api.Challenges.ChallengePercentiles(user.challengeId, user.region)).response
   // console.log("Distribution for ARAM Eradication:", distribution)
}