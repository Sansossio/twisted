import { BaseApiLor } from './LorBase'
import { MatchLorApi } from './LorMatch' 
import { RankedLorApi } from './LorRanked'
import { StatusLorApi } from './LorStatus'

// LOR API
export class LorApi extends BaseApiLor {
  // Match Methods
  public readonly Match = new MatchLorApi(this.getParam())
  // Ranked Method
  public readonly Ranked = new RankedLorApi(this.getParam())
  // Status Method
  public readonly Status = new StatusLorApi(this.getParam())
}
