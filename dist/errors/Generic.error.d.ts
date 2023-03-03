import { IErrors } from '.';
import { RateLimitDto } from '../models-dto/rate-limit/rate-limit.dto';
import * as Axios from 'axios';
/**
 * Not api key found
 */
export declare class GenericError extends Error implements IErrors {
    readonly status: number;
    readonly error: Error;
    readonly rateLimits: RateLimitDto;
    readonly body?: any;
    readonly name = "GenericError";
    constructor(rateLimits: RateLimitDto, error: Axios.AxiosError);
}
