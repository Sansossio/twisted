import { RiotApi } from '../../src'
import { TftApi } from '../../src'
import { configTft } from '../config/config'

const rApi = new RiotApi()
const api = new TftApi()

export async function matchListTft () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(configTft.summonerName, configTft.region, configTft.regionGroup)
  const x = await api.Match.list(puuid, configTft.tftRegion)
  console.log(puuid)
  console.log(x)
}
