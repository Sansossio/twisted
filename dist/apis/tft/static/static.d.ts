import { TFTChampionsDTO } from '../../../models-dto/index.js';
import { TFTHexesDto } from '../../../models-dto/statics/tft-hexes.dto';
import { TFTItemsDTO } from '../../../models-dto/statics/tft-items';
import { TFTTraitsDTO } from '../../../models-dto/statics/tft-trait';
export declare class TFTStaticFiles {
    Champions(): TFTChampionsDTO[];
    Hexes(): TFTHexesDto[];
    Items(): TFTItemsDTO[];
    Traits(): TFTTraitsDTO[];
}
