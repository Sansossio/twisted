import { IErrors } from '.';
/**
 * Not api key found
 */
export declare class ApiKeyNotFound extends Error implements IErrors {
    readonly status = 501;
    readonly name = "ApiKeyNotFound";
    constructor();
}
