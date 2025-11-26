import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { EmployeeDto } from "./dto/create-employee.dto";
import { EmployesService } from "./employes.service";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { GetEmployeesDto } from "./dto/get-employees.dto";
import { Roles } from "src/auth/decorators/roles.decorator";
import { EmployeeDesignation } from "./enums/employee-designation.enum";

@Controller('employees')
export class EmployesController{
    constructor(
        private readonly employeeService: EmployesService
    ){}
    @ApiOperation({
        summary: 'Create Employee'
    })
    @ApiResponse({
        status: 201,
        description: 'Employee created successfully'
    })
    @Roles('owner')
    @Post()
    async createEmployee(
        @Body() employeeDto: EmployeeDto
    ){
        return await this.employeeService.createEmployee(employeeDto)
    }   

    @ApiOperation({
        summary: 'Delete Employee'
    })
    @ApiResponse({
        status: 200,
        description: 'Employee deleted successfully'
    })
    @Roles('owner')
    @Delete(':employeeId')
    async deleteEmployee(
        @Param('employeeId', ParseIntPipe) employeeId: number
    ){
        return this.employeeService.deleteEmployee(employeeId)
    }

    @ApiOperation({
        summary: 'Update Employee Details'
    })
    @ApiResponse({
        status: 200,
        description: 'Employee Details Updated Successfully'
    })
    @Roles('owner')
    @Patch(':empId')
    async updateEmployeeDetails(
        @Body() updateEmployeeDto: UpdateEmployeeDto,
        @Param('empId', ParseIntPipe) empId: number
    ){
        return await this.employeeService.updateEmployee(empId,updateEmployeeDto)
    }

    @ApiOperation({
        summary: 'Get Employees data in paginated format'
    })
    @ApiResponse({
        status: 200,
        description: 'Employees data fetched successfully'
    })
    @Roles('owner')
    @Get()
    async fetchAllEmployees(
        @Query('shopId', ParseIntPipe) shopId: number, 
        @Query() query: GetEmployeesDto
    ){
        return await this.employeeService.fetchEmployees(shopId,query)
    }
}
