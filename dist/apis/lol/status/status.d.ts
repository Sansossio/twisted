import { Regions } from '../../../constants';
import { LolStatusDTO } from '../../../models-dto';
import { BaseApiLol } from '../base/base.api.lol';
export declare class StatusApi extends BaseApiLol {
    /**
     * Lol status by server
     * @param region Riot region
     * @deprecated
     */
    get(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LolStatusDTO>>;
}
