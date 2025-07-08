import { MiniSeriesDTO } from '../summoner-league/miniseries.dto'

export class LeagueEntryDTO {
  queueType: string
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
  rank: string
  leagueId: string
  inactive: boolean
  freshBlood: boolean
  tier: string
  /**
   * @deprecated use puuid instead
   * Player's summonerId (Encrypted)
   */
  summonerId: string
  puuid: string;
  leaguePoints: number
}
