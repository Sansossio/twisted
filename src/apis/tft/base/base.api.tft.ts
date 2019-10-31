import { BaseApi } from '../../../base/base'
import { TftRegions } from '../../../constants'

export class BaseApiTft extends BaseApi<TftRegions> {
  protected readonly game: string = 'tft'
}
