import { AccountRiotApi } from './Account'
import { RiotBase } from './RiotBase'

// Riot Generic API
export class RiotApi extends RiotBase {
  // Match Methods
  public readonly Account = new AccountRiotApi(this.getParam())
}
