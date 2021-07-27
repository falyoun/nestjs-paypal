"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaypalNetworkTransactionReferenceDto = void 0;
var class_validator_1 = require("class-validator");
var PaypalNetworkTransactionReferenceDto = /** @class */ (function () {
    function PaypalNetworkTransactionReferenceDto() {
    }
    __decorate([
        class_validator_1.Length(9, 15),
        class_validator_1.Matches(/^[a-zA-Z0-9]+$/)
    ], PaypalNetworkTransactionReferenceDto.prototype, "id");
    __decorate([
        class_validator_1.Length(4, 4),
        class_validator_1.Matches(/^[0-9]+$/)
    ], PaypalNetworkTransactionReferenceDto.prototype, "date");
    return PaypalNetworkTransactionReferenceDto;
}());
exports.PaypalNetworkTransactionReferenceDto = PaypalNetworkTransactionReferenceDto;
