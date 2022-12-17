import { OmitType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';

export class InitiateOrderHeadersDto {
  // The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.
  'PayPal-Request-Id'?: string;
  'PayPal-Partner-Attribution-Id'?: string;
  'PayPal-Client-Metadata-Id'?: string;

  // The preferred server response upon successful completion of the request. Value is:
  // return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links.
  // return=representation. The server returns a complete resource representation, including the current state of the resource.
  Prefer?: 'return=minimal' | 'return=representation';
}

export class AuthorizeOrderHeadersDto extends OmitType(
  InitiateOrderHeadersDto,
  ['PayPal-Partner-Attribution-Id'],
) {
  // An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see PayPal-Auth-Assertion.
  @IsOptional()
  'PayPal-Auth-Assertion'?: string;
}
