import { BaseApi } from '../../../base/base'
import { TftRegions, Regions } from '../../../constants'

export class BaseApiTft extends BaseApi<TftRegions | Regions> {
  protected readonly game: string = 'tft'
}
