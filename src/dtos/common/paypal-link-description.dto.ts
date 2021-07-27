import { IsNotEmpty } from "class-validator";


export class PaypalLinkDescriptionDto {
  @IsNotEmpty()
  href: string;
  @IsNotEmpty()
  rel: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH'
}