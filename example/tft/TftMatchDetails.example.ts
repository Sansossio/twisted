import { TftApi } from '../../src'
import { configTft } from '../config/config'
import { getSummonerTft } from './SummonerTFT.example'

const api = new TftApi()

export async function matchDetailsTft () {
  const {
    response: {
      puuid
    }
  } = await getSummonerTft()
  const {
    response: [matchId]
  } = await api.Match.list(puuid, configTft.tftRegion)
  return api.Match.get(matchId, configTft.tftRegion)
}
