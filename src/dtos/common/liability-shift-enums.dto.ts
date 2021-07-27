

export enum LiabilityShiftEnumsDto {
  // The possible values are:
  //
  // YES. Liability has shifted to the card issuer. Available only after order is authorized or captured.
  // NO. Liability is with the merchant.
  // POSSIBLE. Liability may shift to the card issuer. Available only before order is authorized or captured.
  // UNKNOWN. The authentication system is not available.
  'YES',
  'NO',
  'POSSIBLE',
  'UNKNOWN'
}