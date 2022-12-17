import { PaypalMoneyDto, PaypalPayeeBaseDto } from '@app/dtos';

export class PaypalPlatformFeeDto {
  amount: PaypalMoneyDto;
  payee: PaypalPayeeBaseDto;
}
