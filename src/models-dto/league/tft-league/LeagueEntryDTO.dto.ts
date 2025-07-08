import { MiniSeriesDTO } from '../summoner-league'

export class LeagueEntryDTO {
  readonly puuid: string
  readonly leagueId: string
  /**
   * @deprecated use puuid instead
   * Player's summonerId (Encrypted)
   */
  readonly summonerId: string
  /**
   * @deprecated summoner name is not present anymore
   */
  readonly summonerName: string
  readonly queueType: string
  readonly tier: string
  readonly rank: string
  readonly leaguePoints: number
  readonly wins: number
  readonly losses: number
  readonly hotstreak: boolean
  readonly veteran: boolean
  readonly freshBlood: boolean
  readonly inactive: boolean
  readonly miniSeries?: MiniSeriesDTO
}
