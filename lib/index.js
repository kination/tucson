"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelCase = require("camelcase");
var moment = require("moment");
var camelize = function (key) {
    return camelCase(key);
};
function tuned(obj, option, instance) {
    if (!obj) {
        return instance;
    }
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = obj[key];
        // ignore key-value when key is included in 'exclude' list
        if (option.exclude && option.exclude.indexOf(key) > -1) {
            continue;
        }
        // make data as form of 'Date' when key is included in 'exclude' list
        if (option.makeDate && option.makeDate.indexOf(key) > -1) {
            if (moment(value).isValid()) {
                instance[camelize(key)] = moment(value).toDate();
            }
            else {
                instance[camelize(key)] = value;
            }
            continue;
        }
        instance[camelize(key)] = value;
    }
    return instance;
}
exports.tuned = tuned;
