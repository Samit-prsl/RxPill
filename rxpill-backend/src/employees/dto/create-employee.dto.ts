import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min, Max, IsEnum, IsDateString } from "class-validator";
import { EmployeeDesignation } from "../enums/employee-designation.enum";
import { ShopIdDto } from "./shopid.dto";

export class EmployeeDto {
  @ApiProperty({
    example: "1",
    description: "Shop ID"
  })
  @IsString()
  @IsNotEmpty()
  shop: ShopIdDto
  
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

  @ApiProperty({
    example: "1995-08-21",
    description: "Date of birth of the employee (YYYY-MM-DD)",
  })
  @IsDateString()
  dob?: string;

  @ApiProperty({
    enum: EmployeeDesignation,
    example: "Owner",
    description: "Designation of the employee (e.g. Owner, Manager, Staff)",
  })
  @IsEnum(EmployeeDesignation)
  @IsNotEmpty()
  designation: EmployeeDesignation;
}
