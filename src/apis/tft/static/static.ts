import champions from './files/champions.json'
import hexes from './files/hexes.json'
import items from './files/items.json'
import traits from './files/traits.json'

import { TFTChampionsDTO } from '../../../models-dto/index.js'
import { TFTHexesDto } from '../../../models-dto/statics/tft-hexes.dto'
import { TFTItemsDTO } from '../../../models-dto/statics/tft-items'
import { TFTTraitsDTO } from '../../../models-dto/statics/tft-trait'

export class TFTStaticFiles {
  Champions (): TFTChampionsDTO[] {
    return champions
  }

  Hexes (): TFTHexesDto[] {
    return hexes
  }

  Items (): TFTItemsDTO[] {
    return items
  }

  Traits (): TFTTraitsDTO[] {
    return traits
  }
}
