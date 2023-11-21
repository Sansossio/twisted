import { BaseApiRiot } from './base/base.api.riot'
import { AccountV1Api } from './account/account'

/**
 * Riot Api
 */
export class RiotApi extends BaseApiRiot {
   /**
    * AccountV1 methods
    */
   public readonly Account = new AccountV1Api(this.getParam())
}
