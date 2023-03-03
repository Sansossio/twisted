"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailable = void 0;
const http_status_codes_1 = require("http-status-codes");
const message = 'Riot games api unavailable check: https://developer.riotgames.com/api-status/';
/**
 * Not api key found
 */
class ServiceUnavailable extends Error {
    constructor(rateLimits, error) {
        super(message);
        this.rateLimits = rateLimits;
        this.error = error;
        this.name = 'RiotUnavailable';
        this.status = http_status_codes_1.SERVICE_UNAVAILABLE;
        this.error = error;
        Object.setPrototypeOf(this, ServiceUnavailable.prototype);
    }
}
exports.ServiceUnavailable = ServiceUnavailable;
