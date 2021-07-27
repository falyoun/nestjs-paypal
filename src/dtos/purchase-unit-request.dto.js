"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PurchaseUnitRequestDto = void 0;
var class_validator_1 = require("class-validator");
var PurchaseUnitRequestDto = /** @class */ (function () {
    function PurchaseUnitRequestDto() {
    }
    __decorate([
        class_validator_1.MaxLength(256)
    ], PurchaseUnitRequestDto.prototype, "reference_id");
    __decorate([
        class_validator_1.MaxLength(127)
    ], PurchaseUnitRequestDto.prototype, "description");
    __decorate([
        class_validator_1.MaxLength(127)
    ], PurchaseUnitRequestDto.prototype, "custom_id");
    __decorate([
        class_validator_1.MaxLength(127)
    ], PurchaseUnitRequestDto.prototype, "invoice_id");
    __decorate([
        class_validator_1.MaxLength(22)
    ], PurchaseUnitRequestDto.prototype, "soft_descriptor");
    return PurchaseUnitRequestDto;
}());
exports.PurchaseUnitRequestDto = PurchaseUnitRequestDto;
