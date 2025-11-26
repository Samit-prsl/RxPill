import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { EmployeeDto } from "src/employees/dto/create-employee.dto";


export class ShopDto {
  @ApiProperty({
    example: "HealthPlus Pharmacy",
    description: "The name of the shop",
  })
  @IsString()
  @IsNotEmpty()
  shopName: string;

  @ApiProperty({
    example: "123, Park Street, Kolkata",
    description: "Full address of the shop",
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiPropertyOptional({
    example: "LIC12345",
    description: "Shop's license number (optional)",
  })
  @IsOptional()
  @IsString()
  licenseNumber?: string;

  @ApiPropertyOptional({
    example: "22ABCDE1234F1Z5",
    description: "Shop's GST number (optional)",
  })
  @IsOptional()
  @IsString()
  gstNumber?: string;

  @ApiPropertyOptional({
    type: [EmployeeDto],
    description: "List of employees working in the shop",
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => EmployeeDto)
  employees?: EmployeeDto[];
}
