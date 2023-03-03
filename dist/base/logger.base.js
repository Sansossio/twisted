"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const base_utils_1 = require("./base.utils");
class Logger {
    // Private methods
    static parseName(endpoint, uri) {
        let text = `${endpoint.prefix}/${endpoint.path}`;
        if (uri) {
            text += ` (${uri})`;
        }
        return text;
    }
    // Public methods
    static start(endpoint, uri) {
        const name = Logger.parseName(endpoint, uri);
        console.time(name);
    }
    static end(endpoint, uri) {
        const name = Logger.parseName(endpoint, uri);
        console.timeEnd(name);
    }
    static uri(options, endpoint) {
        const uri = base_utils_1.getUrlFromOptions(options);
        console.log(`Calling method url: ${uri} (${endpoint.path})`);
    }
    static rateLimit(endpoint, ms) {
        const name = Logger.parseName(endpoint);
        console.log(`Waiting ${(ms / 1000).toFixed(2)} seconds by rate limit (${name})`);
    }
}
exports.Logger = Logger;
