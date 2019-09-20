import { BaseApi } from './base'
import { MatchApi } from './match/match'
import { LeagueApi } from './league/league'
import { SummonerApi } from './summoner/summoner'
import { ThirdPartyCode } from './thirdPartyCode/thirdPartyCode'
import { ChampionApi } from './champion/champion'
import { SpectatorApi } from './spectator/spectator'
import { StatusApi } from './status/status'

/**
 * Riot Games api wrap
 */
export class RiotApi extends BaseApi {
  /**
   * Match methods
   */
  public readonly match = new MatchApi(this.getKey())
  /**
   * League methods
   */
  public readonly league = new LeagueApi(this.getKey())
  /**
   * Summoner methods
   */
  public readonly summoner = new SummonerApi(this.getKey())
  /**
   * Third Party methods
   */
  public readonly thirdPartyCode = new ThirdPartyCode(this.getKey())
  /**
   * Champion mastery
   */
  public readonly champion = new ChampionApi(this.getKey())
  /**
   * Spectator methods
   */
  public readonly spectator = new SpectatorApi(this.getKey())
  /**
   * Status methods
   */
  public readonly status = new StatusApi(this.getKey())
}
