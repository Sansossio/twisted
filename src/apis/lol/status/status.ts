import { BaseApi } from '../../../base/base'
import { Regions } from '../../../constants'
import { LolStatusDTO } from '../../../dto'
import { endpointsV3 } from '../../../endpoints'

export class StatusApi extends BaseApi {
  /**
   * Lol status by server
   * @param region Riot region
   */
  public async get (region: Regions) {
    return this.request<LolStatusDTO>(region, endpointsV3.LolStatus)
  }
}
