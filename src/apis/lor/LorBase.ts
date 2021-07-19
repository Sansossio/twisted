import { BaseApi } from '../../base/base'
import { LorRegions, Regions } from '../../constants'
import { BaseApiGames } from '../../base/base.const'

export class BaseApiLor extends BaseApi<LorRegions | Regions> {
  protected readonly game: BaseApiGames = BaseApiGames.Lor
}
