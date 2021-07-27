

export class InitiateTokenResponseDto {
  scope: string;
  access_token: string;
  app_id: string;
  expires_in: number;
  nonce: string;
}