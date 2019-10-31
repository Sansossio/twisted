import { Regions } from '../../../constants'
import { LolStatusDTO } from '../../../dto'
import { endpointsV3 } from '../../../endpoints'
import { BaseApiLol } from '../base/base.api.lol'

export class StatusApi extends BaseApiLol {
  /**
   * Lol status by server
   * @param region Riot region
   */
  public async get (region: Regions) {
    return this.request<LolStatusDTO>(region, endpointsV3.LolStatus)
  }
}
