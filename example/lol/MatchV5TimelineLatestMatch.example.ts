import { LolApi } from '../../src/apis/lol/lol'
import { Regions, RegionGroups } from '../../src/constants'

export async function matchV5TimelineLatestMatchExample() {
  const api = new LolApi()

  const summonerName = "Cookie Hater"
  const summoner = (await api.Summoner.getByName(summonerName, Regions.EU_WEST)).response
  console.log("Found summoner:", summoner.puuid)

  const matchlist = (await api.MatchV5.list(summoner.puuid, RegionGroups.EUROPE, { queue: 450 })).response
  console.log("Matchlist length:", matchlist.length)

  const matchId = matchlist[0]
  const match = (await api.MatchV5.get(matchId, RegionGroups.EUROPE)).response
  console.log("Found match with id:", match.metadata.matchId)

  const timeline = (await api.MatchV5.timeline(matchId, RegionGroups.EUROPE)).response
  console.log("Timeline length:", timeline.info.frames.length)
}

matchV5TimelineLatestMatchExample()
