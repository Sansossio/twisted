import { RiotApi } from '../../src'

const api = new RiotApi()

export async function gameTypessDataDragon () {
  return api.leagueOfLegends.dataDragon.getGameTypes()
}
