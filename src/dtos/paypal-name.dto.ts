import { IsOptional, MaxLength, MinLength } from 'class-validator';


export class PaypalNameDto {
  // The prefix, or title, to the party's name.
  // Maximum length: 140.
  @MaxLength(140)
  @IsOptional()
  prefix?: string;

  @IsOptional()
  given_name?: string;

  @IsOptional()
  surname?: string;

  @IsOptional()
  middle_name?: string;

  @IsOptional()
  suffix?: string;


  // DEPRECATED. The party's alternate name. Can be a business name, nickname, or any other name that cannot be split into first, last name. Required when the party is a business
  // Maximum length: 300.
  @MaxLength(300)
  @IsOptional()
  alternate_full_name?: string;
  // When the party is a person, the party's full name.
  // Maximum length: 300.
  @MaxLength(300)
  @IsOptional()
  full_name?: string;


  // The full name representation like Mr J Smith.
  @MinLength(3)
  @MaxLength(300)
  @IsOptional()
  name?: string;
}