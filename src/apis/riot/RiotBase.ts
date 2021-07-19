import { BaseApi } from '../../base/base'
import { Regions, RiotRegions } from '../../constants'
import { BaseApiGames } from '../../base/base.const'

export class RiotBase extends BaseApi<RiotRegions | Regions> {
  protected readonly game: BaseApiGames = BaseApiGames.RIOT
}
