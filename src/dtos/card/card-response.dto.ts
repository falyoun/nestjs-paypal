import { Length, Matches } from 'class-validator';
import {
  CardsTypesEnumDto,
  PaypalAuthenticationResponseDto,
  PaypalBrandsEnumDto,
  PaypalPortableAddress,
} from '@app/dtos';

export class CardResponseDto {
  // The card holder's name as it appears on the card.
  @Length(2, 300)
  name: string;
  billing_address: PaypalPortableAddress;

  // The last digits of the payment card.
  @Matches(/[0-9]{2,}/)
  last_digits: string;

  // The card brand or network. Typically used in the response.
  brand: PaypalBrandsEnumDto;

  // The payment card type.
  type: CardsTypesEnumDto;

  // Results of Authentication such as 3D Secure.
  authentication_result: PaypalAuthenticationResponseDto;
}
