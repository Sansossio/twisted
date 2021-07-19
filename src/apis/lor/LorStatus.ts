import { LorRegions } from '../../constants';
import { endpointsLorV1, endpointsTFTV1 } from '../../endpoints';
import { BaseApiLor } from './LorBase';

export class StatusLorApi extends BaseApiLor {
  // Public methods
  /**
   * Get LOR Network Status
   * @param region
   */
  public async getLorStatus(region: LorRegions) {
    return this.request<StatusLorApi>(region, endpointsLorV1.Status)
  }
}
  