

export enum PaypalAuthenticationStatusDto {
  // The possible values are:
  //
  // Y. Successful authentication.
  // N. Failed authentication / account not verified / transaction denied.
  // U. Unable to complete authentication.
  // A. Successful attempts transaction.
  // C. Challenge required for authentication.
  // R. Authentication rejected (merchant must not submit for authorization).
  // D. Challenge required; decoupled authentication confirmed.
  // I. Informational only; 3DS requestor challenge preference acknowledged.
  'Y',
  'N',
  'U',
  'A',
  'C',
  'R',
  'D',
  'I'
}