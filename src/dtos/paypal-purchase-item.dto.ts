import { IsNotEmpty, Length, MaxLength } from 'class-validator';
import { PaypalMoneyDto } from '@app/dtos';

export class PaypalPurchaseItemDto {
  // The item name or title.
  @IsNotEmpty()
  @Length(1, 127)
  name: string;

  // The item price or rate per unit. If you specify unit_amount, purchase_units[].amount.breakdown.item_total is required. Must equal unit_amount * quantity for all items. unit_amount.value can not be a negative number.
  unit_amount: PaypalMoneyDto;

  // The item tax for each unit. If tax is specified, purchase_units[].amount.breakdown.tax_total is required. Must equal tax * quantity for all items. tax.value can not be a negative number.
  tax: PaypalMoneyDto;

  // The item quantity. Must be a whole number.
  // Pattern: ^[1-9][0-9]{0,9}$.
  @MaxLength(10)
  @IsNotEmpty()
  quantity: string;

  // The detailed item description.
  @MaxLength(127)
  description: string;

  // The stock keeping unit (SKU) for the item.
  @MaxLength(127)
  sku: string;

  // The item category type.
  // The possible values are:
  //  - DIGITAL_GOODS. Goods that are stored, delivered, and used in their electronic format. This value is not currently supported for API callers that leverage the [PayPal for Commerce Platform](https://www.paypal.com/us/webapps/mpp/commerce-platform) product
  //  - PHYSICAL_GOODS. A tangible item that can be shipped with proof of delivery.
  @Length(1, 20)
  category: 'DIGITAL_GOODS' | 'PHYSICAL_GOODS';
}
