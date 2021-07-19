import { LorRegions } from '../../constants'
import { BaseApiLor } from './LorBase'
import { endpointsLorV1 } from '../../endpoints'
import { RankedLorDto } from '../../models-dto/LorModels/LorRankedDtos'

export class RankedLorApi extends BaseApiLor {
  // Public methods
  /**
   * Get Ranked Leaderboards
   * @param region
   */
  public async getRankedLeaderboards(region: LorRegions) {
    return this.request<RankedLorDto>(region, endpointsLorV1.Ranked)
  }
}
