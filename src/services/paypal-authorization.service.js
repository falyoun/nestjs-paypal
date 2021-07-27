"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PaypalAuthorizationService = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("@app/constants");
var errors_1 = require("@app/errors");
var PaypalAuthorizationService = /** @class */ (function () {
    function PaypalAuthorizationService(axiosInstance, options) {
        this.axiosInstance = axiosInstance;
        this.options = options;
    }
    PaypalAuthorizationService.prototype.getBasicKey = function () {
        return Buffer.from(this.options.clientId + ':' + this.options.clientSecret).toString('base64');
    };
    PaypalAuthorizationService.prototype.getAccessToken = function () {
        var url = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';
        var basicKey = this.getBasicKey();
        var data = new URLSearchParams();
        data.append('grant_type', 'client_credentials');
        return this.axiosInstance.post(url, data, {
            headers: __assign(__assign({}, constants_1.PAYPAL_AUTHORIZATION_HEADERS), { Authorization: "Basic " + basicKey })
        }).then(function (r) { return r.data; })["catch"](function (e) {
            var _a;
            throw __assign(__assign({}, errors_1.PaypalErrorsConstants.INVALID_CREDENTIALS), { nativeError: ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data) || e });
        });
    };
    PaypalAuthorizationService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(constants_1.PAYPAL_AXIOS_INSTANCE_TOKEN)),
        __param(1, common_1.Inject(constants_1.PAYPAL_MODULE_OPTIONS))
    ], PaypalAuthorizationService);
    return PaypalAuthorizationService;
}());
exports.PaypalAuthorizationService = PaypalAuthorizationService;
