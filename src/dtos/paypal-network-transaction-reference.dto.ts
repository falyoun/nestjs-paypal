import { Length, Matches } from 'class-validator';


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
  // The possible values are:
  //  - VISA. Visa card.
  //  - MASTERCARD. Mastecard card.
  //  - DISCOVER. Discover card.
  //  - AMEX. American Express card.
  //  - SOLO. Solo debit card.
  //  - JCB. Japan Credit Bureau card.
  //  - STAR. Military Star card.
  //  - DELTA. Delta Airlines card.
  //  - SWITCH. Switch credit card.
  //  - MAESTRO. Maestro credit card.
  //  - CB_NATIONALE. Carte Bancaire (CB) credit card.
  //  - CONFIGOGA. Configoga credit card.
  //  - CONFIDIS. Confidis credit card.
  //  - ELECTRON. Visa Electron credit card.
  //  - CETELEM. Cetelem credit card.
  //  - CHINA_UNION_PAY. China union pay credit card.
  network: 'VISA' | 'MASTERCARD' | 'DISCOVER' | 'AMEX' | 'SOLO' | 'JCB' | 'STAR' | 'DELTA' | 'SWITCH' | 'MAESTRO' | 'CB_NATIONALE' | 'CONFIGOGA' | 'CONFIDIS' | 'ELECTRON' | 'CETELEM' | 'CHINA_UNION_PAY';
}