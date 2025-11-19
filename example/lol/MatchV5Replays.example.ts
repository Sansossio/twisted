import { RiotApi } from '../../src'
import { LolApi } from '../../src'
import { AccountAPIRegionGroups } from '../../src/constants'
import { config } from '../config/config'

export async function matchV5ReplaysExample() {
   const api = new LolApi()
   const rApi = new RiotApi()

   const { response: { puuid }} = await rApi.Account.getByRiotId(config.summonerName, config.tagLine, config.regionGroup as AccountAPIRegionGroups)
   const { response: data } = await api.MatchV5.replays(puuid, config.regionGroup)
   console.log(data);
}

matchV5ReplaysExample()
