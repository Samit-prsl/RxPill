import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min, Max } from "class-validator";

export class EmployeeDto {
  @ApiProperty({
    example: "John Doe",
    description: "Full name of the employee",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "john.doe@gmail.com",
    description: "Employee email address",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "strongpassword123",
    description: "Employee password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({
    example: 28,
    description: "Age of the employee",
  })
  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(70)
  age?: number;

  @ApiProperty({
    example: "Owner",
    description: "Designation of the employee (e.g. Owner, Manager, Staff)",
  })
  @IsString()
  @IsNotEmpty()
  designation: string;
}
