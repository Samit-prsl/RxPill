import { ApiProperty, PartialType } from "@nestjs/swagger";
import { EmployeeDto } from "./create-employee.dto";
import { IsInt, IsNotEmpty } from "class-validator";

export class UpdateEmployeeDto extends PartialType(EmployeeDto){}