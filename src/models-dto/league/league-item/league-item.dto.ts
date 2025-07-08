import { MiniSeriesDTO } from '../summoner-league/miniseries.dto'

export class LeagueItemDTO {
  /**
   * @deprecated summoner name is not present anymore
   */
  summonerName: string
  hotStreak: boolean
  miniSeries: MiniSeriesDTO
  /**
   * Winning team on Summoners Rift. First placement in Teamfight Tactics.
   */
  wins: number
  veteran: boolean
  /**
   * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
   */
  losses: number
  freshBlood: boolean
  inactive: boolean
  rank: string
  /**
   * @deprecated use puuid instead
   * Player's summonerId (Encrypted)
   */
  summonerId: string
  puuid: string
  leaguePoints: number
}
