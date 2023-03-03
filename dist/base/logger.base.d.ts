import { IEndpoint } from '../endpoints/endpoints';
import { AxiosRequestConfig } from 'axios';
export declare class Logger {
    private static parseName;
    static start(endpoint: IEndpoint, uri?: string): void;
    static end(endpoint: IEndpoint, uri?: string): void;
    static uri(options: AxiosRequestConfig, endpoint: IEndpoint): void;
    static rateLimit(endpoint: IEndpoint, ms: number): void;
}
