import {
  PaypalPayerDto,
  PurchaseUnitRequestDto,
  PaypalApplicationContextDto,
} from '@app/dtos';

export class CreatePaypalOrderDto {
  // The intent to either capture payment immediately or authorize a payment for an order after order creation.
  // The possible values are:
  // - CAPTURE. The merchant intends to capture payment immediately after the customer makes a payment.
  // - AUTHORIZE. The merchant intends to authorize a payment and place funds on hold after the customer makes a payment.
  // Authorized payments are best captured within three days of authorization but are available to capture for up to 29 days.
  // After the three-day honor period, the original authorized payment expires and you must re-authorize the payment.
  // You must make a separate request to capture payments on demand.
  // This intent is not supported when you have more than one `purchase_unit` within your order.
  intent?: 'CAPTURE' | 'AUTHORIZE';

  // The customer who approves and pays for the order. The customer is also known as the payer.
  payer?: PaypalPayerDto;

  // An array of purchase units. Each purchase unit establishes a contract between a payer and the payee.
  // Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.
  purchase_units?: PurchaseUnitRequestDto[];

  // Customize the payer experience during the approval process for the payment with PayPal.
  application_context?: PaypalApplicationContextDto;
}
