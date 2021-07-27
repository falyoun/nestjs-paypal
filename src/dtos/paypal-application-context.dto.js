"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaypalApplicationContextDto = void 0;
var class_validator_1 = require("class-validator");
var PaypalApplicationContextDto = /** @class */ (function () {
    function PaypalApplicationContextDto() {
    }
    __decorate([
        class_validator_1.MaxLength(127)
    ], PaypalApplicationContextDto.prototype, "brand_name");
    __decorate([
        class_validator_1.Length(2, 10),
        class_validator_1.Matches(/^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}))?$/)
    ], PaypalApplicationContextDto.prototype, "locale");
    return PaypalApplicationContextDto;
}());
exports.PaypalApplicationContextDto = PaypalApplicationContextDto;
