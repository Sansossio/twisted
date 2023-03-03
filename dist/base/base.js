"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApi = void 0;
const _ = __importStar(require("lodash"));
const errors_1 = require("../errors");
const http_status_codes_1 = require("http-status-codes");
const dotenv_1 = require("dotenv");
const Generic_error_1 = require("../errors/Generic.error");
const rate_limit_error_1 = require("../errors/rate-limit.error");
const base_utils_1 = require("./base.utils");
const service_unavailable_error_1 = require("../errors/service-unavailable.error");
const base_const_1 = require("./base.const");
const logger_base_1 = require("./logger.base");
const request_base_1 = require("./request.base");
dotenv_1.config();
class BaseApi {
    constructor(param) {
        this.game = base_const_1.BaseApiGames.LOL;
        this.baseUrl = base_const_1.BaseConstants.BASE_URL;
        this.rateLimitRetry = true;
        this.rateLimitRetryAttempts = base_const_1.BaseConstants.RETRY_ATTEMPTS;
        this.debug = {
            logTime: false,
            logUrls: false,
            logRatelimits: false
        };
        this.key = process.env.RIOT_API_KEY || '';
        if (typeof param === 'string') {
            this.key = param;
        }
        else if (param) {
            if (typeof param.key === 'string') {
                this.key = param.key;
            }
            this.setParams(param);
        }
    }
    setParams(param) {
        if (typeof param.rateLimitRetry !== 'undefined') {
            this.rateLimitRetry = param.rateLimitRetry;
        }
        if (typeof param.rateLimitRetryAttempts !== 'undefined') {
            this.rateLimitRetryAttempts = param.rateLimitRetryAttempts;
        }
        if (typeof param.debug !== 'undefined') {
            if (typeof param.debug.logTime !== 'undefined') {
                _.set(this.debug, 'logTime', param.debug.logTime);
            }
            if (typeof param.debug.logUrls !== 'undefined') {
                _.set(this.debug, 'logUrls', param.debug.logUrls);
            }
            if (typeof param.debug.logRatelimits !== 'undefined') {
                _.set(this.debug, 'logRatelimits', param.debug.logRatelimits);
            }
        }
        this.concurrency = param.concurrency;
        if (typeof param.concurrency !== 'undefined') {
            request_base_1.RequestBase.setConcurrency(param.concurrency);
        }
        else {
            request_base_1.RequestBase.setConcurrency(Infinity);
        }
    }
    getRateLimits(headers) {
        return {
            Type: _.get(headers, 'x-rate-limit-type', null),
            AppRateLimit: _.get(headers, 'x-app-rate-limit', null),
            AppRateLimitCount: _.get(headers, 'x-app-rate-limit-count', null),
            MethodRateLimit: _.get(headers, 'x-method-rate-limit'),
            MethodRatelimitCount: _.get(headers, 'x-method-rate-limit-count', null),
            RetryAfter: +_.get(headers, 'retry-after', 0),
            EdgeTraceId: _.get(headers, 'x-riot-edge-trace-id')
        };
    }
    getBaseUrl() {
        return this.baseUrl.replace(':game', this.game);
    }
    getApiUrl(endpoint, params) {
        const { prefix, version, path } = endpoint;
        const basePath = `${prefix}/v${version}/${path}`;
        const re = /\$\(([^\)]+)?\)/g;
        let base = `${this.getBaseUrl()}/${basePath}`;
        let match;
        // tslint:disable:no-conditional-assignment
        while (match = re.exec(base)) {
            const [key] = match;
            const value = encodeURI(String(params[match[1]]));
            base = base.replace(key, value);
            re.lastIndex = 0;
        }
        return base;
    }
    isRateLimitError(e) {
        var _a;
        if (!e) {
            return false;
        }
        return e.status === http_status_codes_1.TOO_MANY_REQUESTS || ((_a = e.response) === null || _a === void 0 ? void 0 : _a.status) === http_status_codes_1.TOO_MANY_REQUESTS;
    }
    isServiceUnavailableError(e) {
        var _a;
        if (!e) {
            return false;
        }
        return e.status === http_status_codes_1.SERVICE_UNAVAILABLE || ((_a = e.response) === null || _a === void 0 ? void 0 : _a.status) === http_status_codes_1.SERVICE_UNAVAILABLE;
    }
    getError(e) {
        const headers = this.getRateLimits(_.get(e, 'response.headers'));
        if (this.isRateLimitError(e)) {
            return new rate_limit_error_1.RateLimitError(headers);
        }
        if (this.isServiceUnavailableError(e)) {
            return new service_unavailable_error_1.ServiceUnavailable(headers, e);
        }
        // Otherwise generic error
        return new Generic_error_1.GenericError(headers, e);
    }
    internalRequest(options) {
        return request_base_1.RequestBase.request(options);
    }
    retryRateLimit(region, endpoint, params, e) {
        return __awaiter(this, void 0, void 0, function* () {
            let baseError = this.getError(e);
            const isRateLimitError = this.isRateLimitError(e) || this.isServiceUnavailableError(e);
            if (!this.rateLimitRetry || !isRateLimitError || this.rateLimitRetryAttempts < 1) {
                throw baseError;
            }
            const forceError = true;
            for (let i = 0; i < this.rateLimitRetryAttempts; i++) {
                try {
                    const response = yield this.request(region, endpoint, params, forceError);
                    return response;
                }
                catch (error) {
                    const parseError = this.getError(error);
                    // Isn't rate limit error
                    if (!this.isRateLimitError(error) && !this.isServiceUnavailableError(error)) {
                        throw parseError;
                    }
                    // Set a new attemp
                    const { rateLimits: { RetryAfter } } = parseError;
                    const waitSeconds = this.isServiceUnavailableError(e) ?
                        base_const_1.BaseConstants.SERVICE_UNAVAILABLE :
                        base_const_1.BaseConstants.RATE_LIMIT;
                    const msToWait = ((RetryAfter || 0) * 1000) + (waitSeconds * 1000 * Math.random());
                    // Log
                    if (this.debug.logRatelimits) {
                        logger_base_1.Logger.rateLimit(endpoint, msToWait);
                    }
                    // Wait
                    yield base_utils_1.waiter(msToWait);
                }
            }
            // Throw rate limit
            throw baseError;
        });
    }
    getParam() {
        return {
            key: this.key,
            rateLimitRetry: this.rateLimitRetry,
            rateLimitRetryAttempts: this.rateLimitRetryAttempts,
            concurrency: this.concurrency,
            debug: this.debug
        };
    }
    request(region, endpoint, params, forceError, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key) {
                throw new errors_1.ApiKeyNotFound();
            }
            // Url params
            params = params || {};
            params.region = region.toLowerCase();
            // Format
            const url = this.getApiUrl(endpoint, params);
            // Logger
            if (this.debug.logTime) {
                logger_base_1.Logger.start(endpoint, url);
            }
            const options = {
                url,
                method: 'GET',
                headers: {
                    Origin: null,
                    'X-Riot-Token': this.key
                },
                params: queryParams
            };
            if (this.debug.logUrls) {
                logger_base_1.Logger.uri(options, endpoint);
            }
            try {
                const apiResponse = yield this.internalRequest(options);
                const { data, headers } = apiResponse;
                return {
                    rateLimits: this.getRateLimits(headers),
                    response: data
                };
            }
            catch (e) {
                if (forceError) {
                    throw e;
                }
                return yield this.retryRateLimit(region, endpoint, params, e);
            }
            finally {
                if (this.debug.logTime) {
                    logger_base_1.Logger.end(endpoint, url);
                }
            }
        });
    }
}
exports.BaseApi = BaseApi;
