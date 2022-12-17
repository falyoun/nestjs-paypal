import { Length, Matches } from 'class-validator';
import {
  PaypalNetworkTransactionReferenceDto,
  PaypalStoredPaymentSourcePaymentTypeDto,
  PaypalStoredPaymentSourceUsageTypeDto,
} from '@app/dtos';

export class PaypalStoredPaymentSourceDto {
  // The person or party who initiated or triggered the payment.
  // The possible values are:
  //  - CUSTOMER. Payment is initiated with the active engagement of the customer. e.g. a customer checking out on a merchant website.
  //  - MERCHANT. Payment is initiated by merchant on behalf of the customer without the active engagement of customer. e.g. a merchant charging the monthly payment of a subscription to the customer.
  @Length(1, 255)
  @Matches(/^[0-9A-Z_]+$/)
  payment_initiator: 'CUSTOMER' | 'MERCHANT';

  // Indicates the type of the stored payment_source payment.
  // The possible values are:
  //  - ONE_TIME. One Time payment such as online purchase or donation. (e.g. Checkout with one-click).
  //  - RECURRING. Payment which is part of a series of payments with fixed or variable amounts, following a fixed time interval. (e.g. Subscription payments).
  //  - UNSCHEDULED. Payment which is part of a series of payments that occur on a non-fixed schedule and/or have variable amounts. (e.g. Account Topup payments).
  @Length(1, 255)
  @Matches(/^[0-9A-Z_]+$/)
  payment_type: PaypalStoredPaymentSourcePaymentTypeDto;

  // Indicates if this is a first or subsequent payment using a stored payment source (also referred to as stored credential or card on file).
  // The possible values are:
  //  - FIRST. Indicates the Initial/First payment with a payment_source that is intended to be stored upon successful processing of the payment.
  //  - SUBSEQUENT. Indicates a payment using a stored payment_source which has been successfully used previously for a payment.
  //  - DERIVED. Indicates that PayPal will derive the value of `FIRST` or `SUBSEQUENT` based on data available to PayPal.
  @Length(1, 255)
  @Matches(/^[0-9A-Z_]+$/)
  usage: PaypalStoredPaymentSourceUsageTypeDto;

  previous_network_transaction_reference: PaypalNetworkTransactionReferenceDto;
}
