import { BaseApi } from '../../../base/base'
import { TftRegions, Regions } from '../../../constants'
import { BaseApiGames } from '../../../base/base.const'

export class BaseApiTft extends BaseApi<TftRegions | Regions> {
  protected readonly game: BaseApiGames = BaseApiGames.TFT
}
