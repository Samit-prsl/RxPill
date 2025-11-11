import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
  @ApiProperty({
    example: 'shopowner@gmail.com',
    description: 'Email address of the shop owner',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    example: 'StrongPassword@123',
    description: 'Password for the account (minimum 6 characters)',
  })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @ApiProperty({
    example: 'RxPill Pharmacy',
    description: 'Registered shop name of the user',
  })
  @IsString()
  @IsNotEmpty({ message: 'Shop name is required' })
  shopName: string;
}
