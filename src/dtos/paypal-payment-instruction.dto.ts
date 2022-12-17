import { PaypalPlatformFeeDto } from '@app/dtos';
import { Length } from 'class-validator';

export class PaypalPaymentInstructionDto {
  // An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability.
  platform_fees: PaypalPlatformFeeDto[];

  // The funds that are held on behalf of the merchant.
  //
  // The possible values are:
  //
  //  - INSTANT. The funds are released to the merchant immediately.
  //  - DELAYED. The funds are held for a finite number of days. The actual duration depends on the region and type of integration. You can release the funds through a referenced payout. Otherwise, the funds disbursed automatically after the specified duration.
  disbursement_mode: 'INSTANT' | 'DELAYED';

  // This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction.
  // The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager.
  // Specifying values other than the one provided to you by your account manager would result in an error.
  @Length(1, 20)
  payee_pricing_tier_id: string;
}
