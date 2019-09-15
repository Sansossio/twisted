import { MiniSeriesDTO } from '../SummonerLeague/MiniSeries.dto'

export class LeagueItemDTO {
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
   * Player's summonerId (Encrypted)
   */
  summonerId: string
  leaguePoints: number
}
