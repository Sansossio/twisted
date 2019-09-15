import { Regions } from '..'
import { BaseApi } from './base'
import { LolStatusDTO } from '../dto/Status/LolStatus.dto'
import { endpointsV3 } from '../enum/endpoints.enum'
import { MatchApi } from './match/match'
import { LeagueApi } from './league/league'
import { SummonerApi } from './summoner/summoner'
import { ThirdPartyCode } from './thirdPartyCode/thirdPartyCode'
import { ChampionApi } from './champion/champion'
import { SpectorApi } from './spector/spector'

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
   * Spector methods
   */
  public readonly spector = new SpectorApi(this.getKey())
  /**
   * Lol status by server
   * @param region Riot region
   */
  public async getLolStatus (region: Regions) {
    return this.request<LolStatusDTO>(region, endpointsV3.LolStatus)
  }
}
