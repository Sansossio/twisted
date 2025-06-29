import { AccountAPIRegionGroups, Games } from "../../../constants";
import { endpointsRiotV1 } from "../../../endpoints/endpoints";
import { BaseApiRiot } from "../base/base.api.riot";
import { AccountDto } from "../../../models-dto/account/account.dto";
import { AccountRegionDto } from "../../../models-dto/account/account-region.dto";

export class AccountV1Api extends BaseApiRiot {
  /**
   * Get by PUUID
   * @param puuid
   *
   */
  public async getByPUUID(puuid: string, region: AccountAPIRegionGroups) {
    const params = {
      summonerPUUID: puuid,
    };
    return this.request<AccountDto>(region, endpointsRiotV1.AccountPUUID, params);
  }

  /**
   * Get by RiotId
   * @param gameName
   * @param tagLine
   * @param region
   *
   */
  public async getByRiotId(gameName: string, tagLine: string, region: AccountAPIRegionGroups) {
    const params = {
      gameName,
      tagLine,
    };
    return this.request<AccountDto>(region, endpointsRiotV1.RiotId, params);
  }

  /**
   * Get active region of a PUUID
   * @param puuid
   * @param game
   * @param region
   *
   */
  public async getActiveRegion(puuid: string, game: Games, region: AccountAPIRegionGroups) {
    const params = {
      summonerPUUID: puuid,
      game: game,
    };
    return this.request<AccountRegionDto>(region, endpointsRiotV1.ActiveRegion, params)
  }
}
