import { BaseApiRiot } from './base/base.api.riot';
import { AccountV1Api } from './account/account';
/**
 * Riot Api
 */
export declare class RiotApi extends BaseApiRiot {
    /**
     * AccountV1 methods
     */
    readonly Account: AccountV1Api;
}
