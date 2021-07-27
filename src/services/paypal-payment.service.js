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
exports.PaypalPaymentService = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("@app/constants");
var errors_1 = require("@app/errors");
var PaypalPaymentService = /** @class */ (function () {
    function PaypalPaymentService(axiosInstance, options, paypalAuthorizationService, paypalUtilsService) {
        this.axiosInstance = axiosInstance;
        this.options = options;
        this.paypalAuthorizationService = paypalAuthorizationService;
        this.paypalUtilsService = paypalUtilsService;
        /* this.paypalAuthorizationService.getAccessToken()
          .then(res => {
            const token = res.access_token;
            const order: CreatePaypalOrderDto = {
              intent: 'CAPTURE',
              purchase_units: [
                {
                  amount: {
                    "currency_code": "USD",
                    "value": "100.00"
                  }
                }
              ]
            };
            console.log(res);
            return this.initiateOrder(order, token);
          })
          .then(r => {
            console.log(r)
          })
          .catch(e => {
            console.log(e.response.data);
          })
        */
    }
    PaypalPaymentService.prototype.initiateOrder = function (orderPayload, token, headers) {
        var _headers = __assign({ 'Content-Type': 'application/json', 'Authorization': token ? "Bearer " + token : "Basic " + this.paypalAuthorizationService.getBasicKey() }, headers);
        var apiUrl = this.paypalUtilsService.getApiUrl(this.options.environment);
        return this.axiosInstance.post(apiUrl + "/v2/checkout/orders", orderPayload, {
            headers: _headers
        })
            .then(function (r) { return r.data; })["catch"](function (e) {
            var _a;
            throw __assign(__assign({}, errors_1.PaypalErrorsConstants.INITIATE_ORDER_FAILED), { nativeError: ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data) || e });
        });
    };
    PaypalPaymentService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(constants_1.PAYPAL_AXIOS_INSTANCE_TOKEN)),
        __param(1, common_1.Inject(constants_1.PAYPAL_MODULE_OPTIONS))
    ], PaypalPaymentService);
    return PaypalPaymentService;
}());
exports.PaypalPaymentService = PaypalPaymentService;
