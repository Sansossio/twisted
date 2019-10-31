import { BaseApiTft } from './base/base.api.tft'
import { MatchTFTApi } from './match/match.tft'

/**
 * TFT Api
 */
export class TftApi extends BaseApiTft {
  /**
   * Match methods
   */
  public readonly Match = new MatchTFTApi(this.getParam())
}
