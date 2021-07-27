import { IsArray, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { PaypalOperationDto, PaypalPayerDto, PurchaseUnitRequestDto } from "@app/dtos";
import { PaypalOrderIntentDto } from "@app/dtos/order/paypal-order-intent.dto";

export class AllowedValueToPatchOrderDto {

  @IsOptional()
  @IsEnum(PaypalOrderIntentDto)
  intent?: PaypalOrderIntentDto;


  @IsOptional()
  payer?: PaypalPayerDto;

  @IsArray()
  @IsOptional()
  purchase_units?: PurchaseUnitRequestDto[];
}
export class UpdatePaypalOrderDto {

  @IsNotEmpty()
  @IsEnum(PaypalOperationDto)
  op: PaypalOperationDto;

  @IsOptional()
  path?: string;

  @IsOptional()
  value?: any;


  @IsOptional()
  from?: string;

}