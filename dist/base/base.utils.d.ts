import { AxiosRequestConfig } from 'axios';
export interface IParams {
    [key: string]: string | number;
}
export interface IBaseApiParams {
    /**
     * If api response is 429 (rate limits) try reattempt after needed time (default true)
     */
    rateLimitRetry?: boolean;
    /**
     * Number of time to retry after rate limit response (default 1)
     */
    rateLimitRetryAttempts?: number;
    /**
     * Riot games api key
     */
    key?: string;
    /**
     * Concurrency calls to riot (default infinity)
     * Concurrency per method (example: summoner api, match api, etc)
     */
    concurrency?: number;
    /**
     * Debug methods
     */
    debug?: {
        /**
         * Log methods execution time (default false)
         */
        logTime?: boolean;
        /**
         * Log urls (default false)
         */
        logUrls?: boolean;
        /**
         * Log when is waiting for rate limits (default false)
         */
        logRatelimits?: boolean;
    };
}
export declare function waiter(ms: number): Promise<void>;
export declare function getUrlFromOptions(options: AxiosRequestConfig): string;
