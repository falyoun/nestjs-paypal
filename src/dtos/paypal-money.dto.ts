import { IsNotEmpty, Length, MaxLength } from 'class-validator';


export class PaypalMoneyDto {
  // The three-character ISO-4217 currency code that identifies the currency.
  @IsNotEmpty()
  @Length(3, 3)
  currency_code: string;

  // The value, which might be:
  //  - An integer for currencies like JPY that are not typically fractional.
  //  - A decimal fraction for currencies like TND that are subdivided into thousandths.
  // For the required number of decimal places for a currency code, see Currency Codes.
  // Pattern: ^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$.
  @IsNotEmpty()
  @MaxLength(32)
  value: string;
}