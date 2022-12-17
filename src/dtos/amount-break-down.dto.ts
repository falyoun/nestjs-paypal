import { PaypalMoneyDto } from '@app/dtos';

export class AmountBreakDownDto {
  // The subtotal for all items. Required if the request includes purchase_units[].items[].unit_amount.
  // Must equal the sum of (items[].unit_amount * items[].quantity) for all items. item_total.value can not be a negative number.
  item_total: PaypalMoneyDto;
  // The shipping fee for all items within a given purchase_unit. shipping.value can not be a negative number.
  shipping: PaypalMoneyDto;
  // The handling fee for all items within a given purchase_unit. handling.value can not be a negative number.
  handling: PaypalMoneyDto;
  // The total tax for all items. Required if the request includes purchase_units.items.tax. Must equal the sum of (items[].tax * items[].quantity) for all items.
  // tax_total.value can not be a negative number.
  tax_total: PaypalMoneyDto;
  // The insurance fee for all items within a given purchase_unit. insurance.value can not be a negative number.
  insurance: PaypalMoneyDto;
  // The shipping discount for all items within a given purchase_unit. shipping_discount.value can not be a negative number.
  shipping_discount: PaypalMoneyDto;
  // The discount for all items within a given purchase_unit. discount.value can not be a negative number.
  discount: PaypalMoneyDto;
}
