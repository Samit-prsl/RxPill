import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @ApiProperty({
    example: "abc@gmail.com",
    description: "Registered email of the user",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "strongPassword123",
    description: "Password used during registration",
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
