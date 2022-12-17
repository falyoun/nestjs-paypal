/*
 * A successful request returns the HTTP 201 Created status code and a JSON response body that includes by default a minimal response with the ID, status, and HATEOAS links.
 *  If you require the complete order resource representation, you must pass the Prefer: return=representation request header. This header value is not the default.
 * */

import { Matches } from 'class-validator';
import { PaymentSourceResponseDto } from '@app/dtos/payment-source-response.dto';
import {
  PaypalLinkDescriptionDto,
  PaypalPayerDto,
  PurchaseUnitRequestDto,
} from '@app/dtos';
import { PaypalOrderStatusDto } from '@app/dtos/order/paypal-order-status.dto';

export class PaypalOrderDto {
  // The date and time when the transaction occurred
  @Matches(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  create_time: string;
  // The date and time when the transaction was last updated
  @Matches(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  update_time: string;

  id: string;

  // The payment source used to fund the payment.
  payment_source: PaymentSourceResponseDto;

  intent: 'CAPTURE' | 'AUTHORIZE';

  payer: PaypalPayerDto;

  purchase_units: PurchaseUnitRequestDto[];

  status: PaypalOrderStatusDto;

  links: PaypalLinkDescriptionDto[];
}
