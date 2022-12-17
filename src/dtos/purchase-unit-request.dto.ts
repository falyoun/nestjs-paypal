import { MaxLength } from 'class-validator';
import { AmountWithBreakdownDto } from '@app/dtos/amount-with-breakdown.dto';
import { PaypalPayeeDto } from '@app/dtos/paypal-payee.dto';
import { PaypalPaymentInstructionDto } from '@app/dtos/paypal-payment-instruction.dto';
import { PaypalPurchaseItemDto } from '@app/dtos/paypal-purchase-item.dto';
import { PaypalShippingDto } from '@app/dtos/paypal-shipping.dto';

export class PurchaseUnitRequestDto {
  // The API caller-provided external ID for the purchase unit.
  // Required for multiple purchase units when you must update the order through PATCH.
  // If you omit this value and the order contains only one purchase unit, PayPal sets this value to default
  // Maximum length: 256.
  @MaxLength(256)
  reference_id?: string;

  // The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.
  // If you specify amount.breakdown, the amount equals item_total plus tax_total plus shipping plus handling plus insurance minus shipping_discount minus discount.
  // The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs Currency Codes.
  amount?: AmountWithBreakdownDto;

  // The merchant who receives payment for this transaction.
  payee?: PaypalPayeeDto;

  // Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order.
  payment_instruction?: PaypalPaymentInstructionDto;

  // The purchase description.
  @MaxLength(127)
  description?: string;

  // The API caller-provided external ID. Used to reconcile client transactions with PayPal transactions. Appears in transaction and settlement reports but is not visible to the payer.
  @MaxLength(127)
  custom_id?: string;

  // The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.
  @MaxLength(127)
  invoice_id?: string;

  // The soft descriptor is the dynamic text used to construct the statement descriptor that appears on a payer's card statement.
  //
  // If an Order is paid using the "PayPal Wallet", the statement descriptor will appear in following format on the payer's card statement: PAYPAL_prefix+(space)+merchant_descriptor+(space)+ soft_descriptor
  // The PAYPAL prefix uses 8 characters. Only the first 22 characters will be displayed in the statement.
  // For example, if:
  //  - The PayPal prefix toggle is PAYPAL .
  //  - The merchant descriptor in the profile is Janes Gift.
  //  - The soft descriptor is 800-123-1234.
  //  - Then, the statement descriptor on the card is PAYPAL Janes Gift 80.
  @MaxLength(22)
  soft_descriptor?: string;

  // An array of items that the customer purchases from the merchant.
  items?: PaypalPurchaseItemDto[];

  shipping?: PaypalShippingDto;
}
