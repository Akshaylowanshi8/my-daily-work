"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class PathHelper {
    static normalisePath(relativePath) {
        let removeFileExtenion = (rp) => {
            if (rp) {
                rp = rp.substring(0, rp.lastIndexOf('.'));
            }
            return rp;
        };
        let makeRelativePath = (rp) => {
            // https://github.com/soates/Auto-Import/pull/47/commits/fe32277511820d687267bda1674f57625addcea7
            // if (!rp.startsWith(preAppend)) {
            if (!rp.startsWith('./') && !rp.startsWith('../')) {
                rp = './' + rp;
            }
            if (/^win/.test(process.platform)) {
                rp = rp.replace(/\\/g, '/');
            }
            return rp;
        };
        relativePath = makeRelativePath(relativePath);
        relativePath = removeFileExtenion(relativePath);
        return relativePath;
    }
    static getRelativePath(a, b) {
        return path.relative(path.dirname(a), b);
    }
}
exports.PathHelper = PathHelper;
//# sourceMappingURL=path-helper.js.map