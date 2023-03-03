import { IErrors } from '.';
import { RateLimitDto } from '../models-dto/rate-limit/rate-limit.dto';
/**
 * Not api key found
 */
export declare class ServiceUnavailable extends Error implements IErrors {
    readonly rateLimits: RateLimitDto;
    readonly error: Error;
    readonly status: number;
    readonly name = "RiotUnavailable";
    constructor(rateLimits: RateLimitDto, error: Error);
}
