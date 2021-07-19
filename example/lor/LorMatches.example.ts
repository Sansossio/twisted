import { LorApi } from '../../src'
import { MatchLorDto } from '../../src/models-dto/LorModels/LorMatchDtos'
import { configLor } from '../config/config'
import { getAccountByRiotId } from '../riot/RiotAccount.example'

const api = new LorApi()

export async function lorMatchList() {
  const account = await getAccountByRiotId()
  return api.Match.getMatchList(account.response.puuid, configLor.lorRegion)
}

export async function lorMatchListWithDetails(): Promise<MatchLorDto[]> {
  const account = await getAccountByRiotId()
  const matchListWithDetails = await api.Match.getMatchListWithDetails(account.response.puuid, configLor.lorRegion)
  return matchListWithDetails
}

export async function matchDetails() {
  const account = await getAccountByRiotId()

  const queryAmount = {
    count: 1
  }
  const matches = await api.Match.getMatchList(account.response.puuid, configLor.lorRegion, queryAmount)

  if (matches.response.length != 0) {
    const matchDetails = await api.Match.getMatch(matches.response[0], configLor.lorRegion)
    console.log(`Game mode: ${matchDetails.response.info.game_mode}`)
    return matchDetails
  }

}

matchDetails()