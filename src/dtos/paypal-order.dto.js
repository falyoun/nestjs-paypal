"use strict";
/*
* A successful request returns the HTTP 201 Created status code and a JSON response body that includes by default a minimal response with the ID, status, and HATEOAS links.
*  If you require the complete order resource representation, you must pass the Prefer: return=representation request header. This header value is not the default.
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaypalOrderDto = void 0;
var class_validator_1 = require("class-validator");
var PaypalOrderDto = /** @class */ (function () {
    function PaypalOrderDto() {
    }
    __decorate([
        class_validator_1.Matches(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/)
    ], PaypalOrderDto.prototype, "create_time");
    __decorate([
        class_validator_1.Matches(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/)
    ], PaypalOrderDto.prototype, "update_time");
    return PaypalOrderDto;
}());
exports.PaypalOrderDto = PaypalOrderDto;
