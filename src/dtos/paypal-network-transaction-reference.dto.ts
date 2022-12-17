import { Length, Matches } from 'class-validator';
import { PaypalBrandsEnumDto } from '@app/dtos/common';

export class PaypalNetworkTransactionReferenceDto {
  // Transaction reference id returned by the scheme. For Visa and Amex, this is the "Tran id" field in response. For MasterCard, this is the "BankNet reference id" field in response. For Discover, this is the "NRID" field in response.
  @Length(9, 15)
  @Matches(/^[a-zA-Z0-9]+$/)
  id: string;

  // The date that the transaction was authorized by the scheme. For MasterCard, this is the "BankNet reference date" field in response
  @Length(4, 4)
  @Matches(/^[0-9]+$/)
  date: string;

  // Name of the card network through which the transaction was routed.

  network: PaypalBrandsEnumDto;
}
