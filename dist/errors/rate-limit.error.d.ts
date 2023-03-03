import { IErrors } from '.';
import { RateLimitDto } from '../models-dto/rate-limit/rate-limit.dto';
/**
 * Rate limit error
 */
export declare class RateLimitError extends Error implements IErrors {
    readonly status: number;
    readonly rateLimits: RateLimitDto;
    constructor(rateLimits: RateLimitDto);
}
