"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
exports.default = gcd;
