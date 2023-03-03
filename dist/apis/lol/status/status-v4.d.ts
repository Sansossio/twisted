import { Regions } from '../../../constants';
import { LolStatusPlatformDataDTO } from '../../../models-dto';
import { BaseApiLol } from '../base/base.api.lol';
export declare class StatusV4Api extends BaseApiLol {
    /**
     * Lol status by server
     * @param region Riot region
     */
    get(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LolStatusPlatformDataDTO>>;
}
