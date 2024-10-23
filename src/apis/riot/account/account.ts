import { RegionGroups } from "../../../constants";
import { endpointsRiotV1 } from "../../../endpoints/endpoints";
import { BaseApiRiot } from "../base/base.api.riot";
import { AccountDto } from "../../../models-dto/account/account.dto";

export class AccountV1Api extends BaseApiRiot {
  /**
   * Get by PUUID
   * @param puuid
   *
   */
  public async getByPUUID(puuid: string, region: RegionGroups) {
    const params = {
      summonerPUUID: puuid,
    };
    return this.request<AccountDto>(
      region,
      endpointsRiotV1.AccountPUUID,
      params
    );
  }
  /**
   * Get by RiotId
   * @param gameName
   * @param tagLine
   * @param region
   *
   */
  public async getByRiotId(
    gameName: string,
    tagLine: string,
    region: RegionGroups
  ) {
    const params = {
      gameName,
      tagLine,
    };
    return this.request<AccountDto>(region, endpointsRiotV1.RiotId, params);
  }
}
