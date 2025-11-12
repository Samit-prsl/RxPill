import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
  @ApiProperty({
    example: "Soumyajit De",
    description: "Full name of the user",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "soumyajit@gmail.com",
    description: "Email address of the user",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "StrongPassword123!",
    description: "User's password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: "RxPill Pharmacy",
    description: "Name of the shop owned by the user",
  })
  @IsString()
  @IsNotEmpty()
  shopName: string;
}
