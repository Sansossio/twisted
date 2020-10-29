import { Regions } from '../../../constants'
import { BaseApiTft } from '../base/base.api.tft'
import { endpointsTFTV1 } from '../../../endpoints'
import { LeagueEntryDTO } from '../../../models-dto/league/tft-league'

export class LeagueTFTApi extends BaseApiTft {
  // Public methods
  /**
   * Get match by id
   * @param encryptedSummonerId
   * @param region
   */
  public async get (encryptedSummonerId: string, region: Regions) {
    const params = {
        encryptedSummonerId
    }
    return this.request<LeagueEntryDTO>(region, endpointsTFTV1.LeagueBySummoner, params)
  }

}