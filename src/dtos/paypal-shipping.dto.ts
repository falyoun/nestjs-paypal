import { Length, Matches, MaxLength } from 'class-validator';
import { PaypalPortableAddress } from '@app/dtos/common';

export class PaypalShippingName {
  // When the party is a person, the party's full name.
  full_name: string;
}

export class PaypalShippingDto {
  // The name of the person to whom to ship the items. Supports only the full_name property.
  @MaxLength(300)
  name: PaypalShippingName;

  // The method by which the payer wants to get their items from the payee e.g shipping, in-person pickup. Either type or options but not both may be present.
  // The possible values are:
  //  - SHIPPING. The payer intends to receive the items at a specified address.
  //  - PICKUP_IN_PERSON. The payer intends to pick up the items from the payee in person.
  // Pattern: ^[0-9A-Z_]+$.
  @Length(1, 255)
  @Matches(/^[0-9A-Z_]+$/)
  type: 'SHIPPING' | 'PICKUP_IN_PERSON';

  // The address of the person to whom to ship the items. Supports only the address_line_1, address_line_2, admin_area_1, admin_area_2, postal_code, and country_code properties.
  address: PaypalPortableAddress;
}
