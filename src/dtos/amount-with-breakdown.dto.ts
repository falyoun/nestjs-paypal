import { IsNotEmpty, Length, MaxLength } from 'class-validator';
import { AmountBreakDownDto } from '@app/dtos';

export class AmountWithBreakdownDto {
  @IsNotEmpty()
  @Length(3, 3)
  currency_code: string;

  // The value, which might be:
  //  - An integer for currencies like JPY that are not typically fractional.
  //  - A decimal fraction for currencies like TND that are subdivided into thousandths.
  // For the required number of decimal places for a currency code, see Currency Codes.
  // Maximum length: 32.
  // Pattern: ^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$.
  @IsNotEmpty()
  @MaxLength(32)
  value: string;

  breakdown?: AmountBreakDownDto;
}
