import { Length, Matches, MaxLength } from 'class-validator';
import {
  PaypalPaymentMethodDto,
  PaypalStoredPaymentSourceDto,
} from '@app/dtos';

export class PaypalApplicationContextDto {
  // The label that overrides the business name in the PayPal account on the PayPal site.
  @MaxLength(127)
  brand_name?: string;

  // The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, da-DK, he-IL, id-ID, ja-JP, no-NO, pt-BR, ru-RU, sv-SE, th-TH, zh-CN, zh-HK, or zh-TW.
  @Length(2, 10)
  @Matches(/^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}))?$/)
  locale?: string;

  // The type of landing page to show on the PayPal site for customer checkout.
  // The possible values are:
  //  - LOGIN. When the customer clicks PayPal Checkout, the customer is redirected to a page to log in to PayPal and approve the payment.
  //  - BILLING. When the customer clicks PayPal Checkout, the customer is redirected to a page to enter credit or debit card and other relevant billing information required to complete the purchase.
  //  - NO_PREFERENCE. When the customer clicks PayPal Checkout, the customer is redirected to either a page to log in to PayPal and approve the payment or to a page to enter credit or debit card and other relevant billing information required to complete the purchase, depending on their previous interaction with PayPal.
  landing_page?: 'LOGIN' | 'BILLING' | 'NO_PREFERENCE';

  // The shipping preference:
  //  - Displays the shipping address to the customer.
  //  - Enables the customer to choose an address on the PayPal site.
  //  - Restricts the customer from changing the address during the payment-approval process.
  // The possible values are:
  //  - GET_FROM_FILE. Use the customer-provided shipping address on the PayPal site.
  //  - NO_SHIPPING. Redact the shipping address from the PayPal site. Recommended for digital goods.
  //  - SET_PROVIDED_ADDRESS. Use the merchant-provided address. The customer cannot change this address on the PayPal site.
  shipping_preference?:
    | 'GET_FROM_FILE'
    | 'NO_SHIPPING'
    | 'SET_PROVIDED_ADDRESS';

  // Configures a Continue or Pay Now checkout flow.
  // The possible values are:
  //  - CONTINUE. After you redirect the customer to the PayPal payment page, a Continue button appears. Use this option when the final amount is not known when the checkout flow is initiated and you want to redirect the customer to the merchant page without processing the payment.
  //  - PAY_NOW. After you redirect the customer to the PayPal payment page, a Pay Now button appears. Use this option when the final amount is known when the checkout is initiated and you want to process the payment immediately when the customer clicks Pay Now.
  user_action?: 'CONTINUE' | 'PAY_NOW';

  // The customer and merchant payment preferences.
  payment_method?: PaypalPaymentMethodDto;

  // The URL where the customer is redirected after the customer approves the payment.
  return_url?: string;

  // The URL where the customer is redirected after the customer cancels the payment.
  cancel_url?: string;

  // Provides additional details to process a payment using a payment_source that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).
  // Parameter compatibility:
  //  - payment_type=ONE_TIME is compatible only with payment_initiator=CUSTOMER.
  //  - usage=FIRST is compatible only with payment_initiator=CUSTOMER.
  //  - previous_transaction_reference or previous_network_transaction_reference is compatible only with payment_initiator=MERCHANT.
  //  - Only one of the parameters - previous_transaction_reference and previous_network_transaction_reference - can be present in the request.
  stored_payment_source?: PaypalStoredPaymentSourceDto;
}
