"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaypalShippingDto = exports.PaypalPortableAddress = exports.PaypalShippingName = void 0;
var class_validator_1 = require("class-validator");
var PaypalShippingName = /** @class */ (function () {
    function PaypalShippingName() {
    }
    return PaypalShippingName;
}());
exports.PaypalShippingName = PaypalShippingName;
var PaypalPortableAddress = /** @class */ (function () {
    function PaypalPortableAddress() {
    }
    __decorate([
        class_validator_1.MaxLength(300)
    ], PaypalPortableAddress.prototype, "address_line_1");
    __decorate([
        class_validator_1.MaxLength(300)
    ], PaypalPortableAddress.prototype, "address_line_2");
    __decorate([
        class_validator_1.MaxLength(300)
    ], PaypalPortableAddress.prototype, "admin_area_1");
    __decorate([
        class_validator_1.MaxLength(120)
    ], PaypalPortableAddress.prototype, "admin_area_2");
    return PaypalPortableAddress;
}());
exports.PaypalPortableAddress = PaypalPortableAddress;
var PaypalShippingDto = /** @class */ (function () {
    function PaypalShippingDto() {
    }
    __decorate([
        class_validator_1.MaxLength(300)
    ], PaypalShippingDto.prototype, "name");
    __decorate([
        class_validator_1.Length(1, 255),
        class_validator_1.Matches(/^[0-9A-Z_]+$/)
    ], PaypalShippingDto.prototype, "type");
    return PaypalShippingDto;
}());
exports.PaypalShippingDto = PaypalShippingDto;
