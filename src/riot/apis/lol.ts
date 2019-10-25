import { BaseApi } from '../base'
import { MatchApi } from '../match/match'
import { LeagueApi } from '../league/league'
import { SummonerApi } from '../summoner/summoner'
import { ThirdPartyCode } from '../thirdPartyCode/thirdPartyCode'
import { ChampionApi } from '../champion/champion'
import { SpectatorApi } from '../spectator/spectator'
import { StatusApi } from '../status/status'
import { DataDragonService } from '../dataDragon/DataDragonService'

/**
 * Classic league of legends api
 */
export class LolApi extends BaseApi {
  /**
   * Match methods
   */
  public readonly Match = new MatchApi(this.getParam())
  /**
   * League methods
   */
  public readonly League = new LeagueApi(this.getParam())
  /**
   * Summoner methods
   */
  public readonly Summoner = new SummonerApi(this.getParam())
  /**
   * Third Party methods
   */
  public readonly ThirdPartyCode = new ThirdPartyCode(this.getParam())
  /**
   * Champion mastery
   */
  public readonly Champion = new ChampionApi(this.getParam())
  /**
   * Spectator methods
   */
  public readonly Spectator = new SpectatorApi(this.getParam())
  /**
   * Status methods
   */
  public readonly Status = new StatusApi(this.getParam())
  /**
   * Data dragon
   */
  public readonly DataDragon = new DataDragonService()
}
