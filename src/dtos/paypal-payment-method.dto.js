"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaypalPaymentMethodDto = void 0;
var class_validator_1 = require("class-validator");
var PaypalPaymentMethodDto = /** @class */ (function () {
    function PaypalPaymentMethodDto() {
    }
    __decorate([
        class_validator_1.MinLength(1),
        class_validator_1.Matches(/^[0-9A-Z_]+$/)
    ], PaypalPaymentMethodDto.prototype, "payer_selected");
    __decorate([
        class_validator_1.Length(3, 255)
    ], PaypalPaymentMethodDto.prototype, "standard_entry_class_code");
    return PaypalPaymentMethodDto;
}());
exports.PaypalPaymentMethodDto = PaypalPaymentMethodDto;
