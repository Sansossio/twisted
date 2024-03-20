import { BaseApiTft } from './base/base.api.tft'
import { MatchTFTApi } from './match/match.tft'
import { SummonerTftApi } from './summoner/summoner'
import { TFTStaticFiles } from './static/static'
import { LeagueTFTApi } from './league/league.tft'
import { SpectatorTFTV5Api } from './spectator/spectator-v5.tft'

/**
 * TFT Api
 */
export class TftApi extends BaseApiTft {
  /**
   * Match methods
   */
  public readonly Match = new MatchTFTApi(this.getParam())
  /**
   * Summoner methods
   */
  public readonly Summoner = new SummonerTftApi(this.getParam())
  /**
   * League methods
   */
  public readonly League = new LeagueTFTApi(this.getParam())
  /**
   * Spectator methods
   */
  public readonly SpectatorV5 = new SpectatorTFTV5Api(this.getParam())
  /**
   * Static files
   */
  public readonly StaticFiles = new TFTStaticFiles()
}
