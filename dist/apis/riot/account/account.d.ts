import { RegionGroups } from '../../../constants';
import { BaseApiRiot } from '../base/base.api.riot';
import { AccountDto } from '../../../models-dto/account/account.dto';
export declare class AccountV1Api extends BaseApiRiot {
    /**
    * Get by PUUID
    * @param puuid
    *
    */
    getByPUUID(puuid: string, region: RegionGroups): Promise<import("../../../models-dto").ApiResponseDTO<AccountDto>>;
    /**
    * Get by RiotId
    * @param puuid
    *
    */
    getByRiotId(gameName: string, tagLine: string, region: RegionGroups): Promise<import("../../../models-dto").ApiResponseDTO<AccountDto>>;
}
