import { Length, Matches, MinLength } from 'class-validator';


export class PaypalPaymentMethodDto {

  // The customer-selected payment method on the merchant site.
  @MinLength(1)
  @Matches(/^[0-9A-Z_]+$/)
  payer_selected: any;




  // The merchant-preferred payment methods.
  // The possible values are:
  //  - UNRESTRICTED. Accepts any type of payment from the customer.
  //  - IMMEDIATE_PAYMENT_REQUIRED. Accepts only immediate payment from the customer. For example, credit card, PayPal balance, or instant ACH. Ensures that at the time of capture, the payment does not have the `pending` status.
  payee_preferred: 'UNRESTRICTED' | 'IMMEDIATE_PAYMENT_REQUIRED';



  // NACHA (the regulatory body governing the ACH network) requires that API callers (merchants, partners) obtain the consumer’s explicit authorization before initiating a transaction. To stay compliant, you’ll need to make sure that you retain a compliant authorization for each transaction that you originate to the ACH Network using this API. ACH transactions are categorized (using SEC codes) by how you capture authorization from the Receiver (the person whose bank account is being debited or credited). PayPal supports the following SEC codes.
  // The possible values are:
  //  - TEL. The API caller (merchant/partner) accepts authorization and payment information from a consumer over the telephone.
  //  - WEB. The API caller (merchant/partner) accepts Debit transactions from a consumer on their website.
  //  - CCD. Cash concentration and disbursement for corporate debit transaction. Used to disburse or consolidate funds. Entries are usually Optional high-dollar, low-volume, and time-critical. (e.g. intra-company transfers or invoice payments to suppliers).
  //  - PPD. Prearranged payment and deposit entries. Used for debit payments authorized by a consumer account holder, and usually initiated by a company. These are usually recurring debits (such as insurance premiums).
  @Length(3, 255)
  standard_entry_class_code: 'TEL' | 'WEB' | 'CCD' | 'PPD';

}