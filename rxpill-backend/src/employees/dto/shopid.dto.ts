import { IsNotEmpty, IsNumber } from "class-validator";

export class ShopIdDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
