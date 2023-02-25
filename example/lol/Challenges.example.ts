import { LolApi } from '../../src/apis/lol/lol'
import { configARAM } from '../config/config'

export async function challengesV1Example() {
   const api = new LolApi()

   const { response: { puuid } } = await api.Summoner.getByName(configARAM.summonerName, configARAM.region)

   const playerChallenges = (await api.Challenges.PlayerChallenges(puuid, configARAM.region)).response
   console.log('Found total challenge points:', playerChallenges.totalPoints)

   const leaderboards = (await api.Challenges.Leaderboards(configARAM.challengeId, configARAM.level, configARAM.region, { limit: 5 })).response
   console.log(`Top 5 ${configARAM.level} for ARAM Eradication for `, leaderboards)

   const configs = (await api.Challenges.Configs(configARAM.region)).response
   console.log("Config thresholds for the first of all basic challenges:", configs[0])

   const config = (await api.Challenges.ChallengeConfig(configARAM.challengeId, configARAM.region)).response
   console.log('Challenge Configuration for ARAM Eradication', config)

   const distributions = (await api.Challenges.Percentiles(configARAM.region)).response
   console.log("Distribution for ARAM Eradication:", distributions[configARAM.challengeId])

   const distribution = (await api.Challenges.ChallengePercentiles(configARAM.challengeId, configARAM.region)).response
   console.log("Distribution for ARAM Eradication:", distribution)
}