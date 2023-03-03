/**
 * Rate Limiting
 */
export declare class RateLimitDto {
    /**
     * The rate limit type, either method, service, or application. method indicates you have exceeded the individual limits for that method. application indicates you have exceeded the total rate limit for your application. service is returned if the service is rate limiting it's connections from the Riot API layer, regardless of your API key's application or method rate limits.
     * Included in any 429 response where the rate limit was enforced by the API infrastructure. Not included in any 429 response where the rate limit was enforced by the underlying service to which the request was proxied.
     */
    Type?: string;
    /**
     * The remaining number of seconds before the rate limit resets. Applies to both user and service rate limits.
     * Included in any 429 response where the rate limit was enforced by the API infrastructure. Not included in any 429 response where the rate limit was enforced by the underlying service to which the request was proxied.
     */
    RetryAfter?: number;
    /**
     * The application rate limits currently being applied to your API key. See the Application Rate Limit Headers section below for more information.
     */
    AppRateLimit: string;
    /**
     * The method rate limits currently being applied to your API key. See the Method Rate Limit Headers section below for more information.
     */
    MethodRateLimit: string;
    /**
     * The number of calls to a specific method that have been made during a specific rate limit. See the Application Rate Limit Headers section below for more information.
     */
    AppRateLimitCount: string;
    /**
     * The number of calls to a specific method that have been made during a specific rate limit. See the Method Rate Limit Headers section below for more information.
     */
    MethodRatelimitCount: string;
    /**
     * Trace id
     */
    EdgeTraceId?: string;
}
