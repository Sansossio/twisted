import { AxiosRequestConfig } from 'axios';
import Queue from 'promise-queue';
export declare class RequestBase {
    static queue: Queue;
    private static sendRequest;
    private static getQueue;
    static setConcurrency(concurrency: number): void;
    static request<T>(options: AxiosRequestConfig): Promise<T>;
}
