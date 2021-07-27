import { MaxLength } from "class-validator";


export class PaypalPortableAddress {

  // The first line of the address. For example, number or street. For example, 173 Drury Lane. Required for data entry and compliance and risk checks. Must contain the full address.
  @MaxLength(300)
  address_line_1: string;

  // The second line of the address. For example, suite or apartment number.
  @MaxLength(300)
  address_line_2: string;

  // The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, CA and not California. Value, by country, is:
  //  - UK. A county.
  //  - US. A state.
  //  - Canada. A province.
  //  - Japan. A prefecture.
  //  - Switzerland. A kanton.
  @MaxLength(300)
  admin_area_1: string;

  // A city, town, or village. Smaller than admin_area_level_1.
  @MaxLength(120)
  admin_area_2: string;
  // The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See postal code.
  postal_code: string;
  // The two-character ISO 3166-1 code that identifies the country or region.
  country_code: string;

}