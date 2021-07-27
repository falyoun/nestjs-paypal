

export enum PaypalEnrollmentStatusDto {
  // The possible values are:
  //
  // Y. Yes. The bank is participating in 3-D Secure protocol and will return the ACSUrl.
  // N. No. The bank is not participating in 3-D Secure protocol.
  // U. Unavailable. The DS or ACS is not available for authentication at the time of the request.
  // B. Bypass. The merchant authentication rule is triggered to bypass authentication.
  'Y',
  'N',
  'U',
  'B'
}