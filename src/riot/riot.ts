import { BaseApi } from './base'
import { LolApi } from './apis'

/**
 * Riot Games api wrap
 */
export class RiotApi extends BaseApi {
  readonly Lol = new LolApi(this.getParam())
}
