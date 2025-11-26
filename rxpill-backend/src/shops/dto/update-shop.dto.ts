import { ApiProperty, PartialType } from "@nestjs/swagger";
import { ShopDto } from "./shop.dto";
import { IsInt, IsNotEmpty } from "class-validator";

export class UpdateShopDto extends PartialType(ShopDto){}