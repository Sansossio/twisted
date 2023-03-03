"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBase = void 0;
const axios_1 = __importDefault(require("axios"));
const promise_queue_1 = __importDefault(require("promise-queue"));
class RequestBase {
    static sendRequest(options) {
        return new Promise((resolve, reject) => {
            axios_1.default(options)
                .then(resolve)
                .catch(reject);
        });
    }
    static getQueue() {
        if (!RequestBase.queue) {
            RequestBase.queue = new promise_queue_1.default(Infinity, Infinity);
        }
        return RequestBase.queue;
    }
    static setConcurrency(concurrency) {
        RequestBase.queue = new promise_queue_1.default(concurrency, Infinity);
    }
    static request(options) {
        return RequestBase.getQueue().add(() => RequestBase.sendRequest(options));
    }
}
exports.RequestBase = RequestBase;
