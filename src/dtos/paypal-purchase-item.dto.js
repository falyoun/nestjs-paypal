"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaypalPurchaseItemDto = void 0;
var class_validator_1 = require("class-validator");
var PaypalPurchaseItemDto = /** @class */ (function () {
    function PaypalPurchaseItemDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Length(1, 127)
    ], PaypalPurchaseItemDto.prototype, "name");
    __decorate([
        class_validator_1.MaxLength(10),
        class_validator_1.IsNotEmpty()
    ], PaypalPurchaseItemDto.prototype, "quantity");
    __decorate([
        class_validator_1.MaxLength(127)
    ], PaypalPurchaseItemDto.prototype, "description");
    __decorate([
        class_validator_1.MaxLength(127)
    ], PaypalPurchaseItemDto.prototype, "sku");
    __decorate([
        class_validator_1.Length(1, 20)
    ], PaypalPurchaseItemDto.prototype, "category");
    return PaypalPurchaseItemDto;
}());
exports.PaypalPurchaseItemDto = PaypalPurchaseItemDto;
