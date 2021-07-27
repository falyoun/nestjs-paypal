"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaypalNameDto = void 0;
var class_validator_1 = require("class-validator");
var PaypalNameDto = /** @class */ (function () {
    function PaypalNameDto() {
    }
    __decorate([
        class_validator_1.MaxLength(140),
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "prefix");
    __decorate([
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "given_name");
    __decorate([
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "surname");
    __decorate([
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "middle_name");
    __decorate([
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "suffix");
    __decorate([
        class_validator_1.MaxLength(300),
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "alternate_full_name");
    __decorate([
        class_validator_1.MaxLength(300),
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "full_name");
    __decorate([
        class_validator_1.MinLength(3),
        class_validator_1.MaxLength(300),
        class_validator_1.IsOptional()
    ], PaypalNameDto.prototype, "name");
    return PaypalNameDto;
}());
exports.PaypalNameDto = PaypalNameDto;
