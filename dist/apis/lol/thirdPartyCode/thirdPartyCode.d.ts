import { Regions } from '../../../constants';
import { ThirdPartyCodeDTO } from '../../../models-dto/third-party-code/third-party-code.dto';
import { ApiResponseDTO } from '../../../models-dto/api-response/api-response';
import { BaseApiLol } from '../base/base.api.lol';
/**
 * Third party methods
 */
export declare class ThirdPartyCode extends BaseApiLol {
    private errorHandler;
    /**
     * Valid codes must be no longer than 256 characters and only use valid characters: 0-9, a-z, A-Z, and -
     * @param encryptedSummonerId
     * @param region
     */
    get(encryptedSummonerId: string, region: Regions): Promise<ApiResponseDTO<ThirdPartyCodeDTO>>;
}
