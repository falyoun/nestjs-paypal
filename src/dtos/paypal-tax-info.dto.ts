import { IsNotEmpty, MaxLength } from 'class-validator';


export class PaypalTaxInfoDto {

  // The customer's tax ID value.
  @IsNotEmpty()
  @MaxLength(14)
  tax_id: string;


  // The customer's tax ID type.
  // The possible values are:
  //  - BR_CPF. The individual tax ID type, typically is 11 characters long.
  //  - BR_CNPJ. The business tax ID type, typically is 14 characters long.
  tax_id_type: 'BR_CPF' | 'BR_CNPJ';
}