import { RiotApi } from '../../src'
import { LolApi } from '../../src/apis/lol/lol'
import { configChallenges } from '../config/config'

export async function challengesV1Example() {
   const rApi = new RiotApi()
   const api = new LolApi()

   const { response: { puuid } } = await rApi.Account.getByRiotId(configChallenges.summonerName, configChallenges.tagLine, configChallenges.regionGroup)

   const playerChallenges = (await api.Challenges.PlayerChallenges(puuid, configChallenges.region)).response
   // console.log('Found total challenge points:', playerChallenges.totalPoints)

   const leaderboards = (await api.Challenges.Leaderboards(configChallenges.challengeId, configChallenges.level, configChallenges.region, { limit: 5 })).response
   // console.log(`Top 5 ${configChallenges.level} for ARAM Eradication for `, leaderboards)

   const configs = (await api.Challenges.Configs(configChallenges.region)).response
   // console.log("Config thresholds for the first of all basic challenges:", configs[0])

   const config = (await api.Challenges.ChallengeConfig(configChallenges.challengeId, configChallenges.region)).response
   // console.log('Challenge Configuration for ARAM Eradication', config)

   const distributions = (await api.Challenges.Percentiles(configChallenges.region)).response
   // console.log("Distribution for ARAM Eradication:", distributions[configChallenges.challengeId])

   const distribution = (await api.Challenges.ChallengePercentiles(configChallenges.challengeId, configChallenges.region)).response
   // console.log("Distribution for ARAM Eradication:", distribution)
}