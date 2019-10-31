import { TftRegions } from '../../../constants'
import { BaseApiTft } from '../base/base.api.tft'
import { MatchTFTDTO } from '../../../dto/Match/Tft/MatchTFT.dto'
import { endpointsTFTV1 } from '../../../endpoints'

export class MatchTFTApi extends BaseApiTft {
  // Public methods
  public async get (matchId: string, region: TftRegions) {
    const params = {
      matchId
    }
    return this.request<MatchTFTDTO>(region, endpointsTFTV1.Match, params)
  }
}
