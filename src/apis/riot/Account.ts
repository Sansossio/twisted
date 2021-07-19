import { RiotRegions } from '../../constants'
import { RiotBase } from './RiotBase'
import { endpointsRiotV1 } from '../../endpoints'
import { AccountDto, ActiveShardDto } from '../../models-dto/RiotModels/RiotAccountDtos'

export class AccountRiotApi extends RiotBase {
  // Public methods
  // Documentation on methods https://developer.riotgames.com/apis#account-v1/
  /**
   * Get player by puuid
   * @param puuid
   * @param region
   */
  public async getByPuuid(puuid: string, region: RiotRegions) {
    const params = {
      puuid
    }
    return this.request<AccountDto>(region, endpointsRiotV1.AccountByPuuid, params)
  }
  
  /**
   * Get player by riot id
   * @param tagLine
   * @param gameName
   * @param region
   */
   public async getByRiotId(tagLine: string, gameName: string, region: RiotRegions) {
    const params = {
      tagLine,
      gameName
    }
    return this.request<AccountDto>(region, endpointsRiotV1.AccountByRiotId, params)
  }

  /**
   * Get player by game
   * @param game
   * @param puuid
   * @param region
   */
   public async getByGame(game: string, puuid: string, region: RiotRegions) {
    const params = {
      game,
      puuid
    }
    return this.request<ActiveShardDto>(region, endpointsRiotV1.AccountByGame, params)
  }

  /**
   * Get yourself
   * @param region
   */
   public async getMe(region: RiotRegions) {
    return this.request<AccountDto>(region, endpointsRiotV1.AccountMe)
  }
  
}
