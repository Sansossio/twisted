import { RiotApi } from '../../src'

const api = new RiotApi()

export async function gameModesDataDragon () {
  return api.leagueOfLegends.dataDragon.getGameModes()
}
