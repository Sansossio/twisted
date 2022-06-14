import { Regions } from '../../../constants'
import { LolStatusDTO } from '../../../models-dto'
import { endpointsV4 } from '../../../endpoints'
import { BaseApiLol } from '../base/base.api.lol'

export class StatusV4Api extends BaseApiLol {
  /**
   * Lol status by server
   * @param region Riot region
   */
  public async get (region: Regions) {
    return this.request<LolStatusDTO>(region, endpointsV4.LolStatus)
  }
}
