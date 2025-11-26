import { BadRequestException, ConflictException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { EntityManager, Repository } from 'typeorm';
import { EmployeeDto } from './dto/create-employee.dto';
import { HashProvider } from 'src/common/providers/hash.provider';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { GetEmployeesDto } from './dto/get-employees.dto';

@Injectable()
export class EmployesService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,

        private readonly hashProvider: HashProvider
    ){}

    public async createEmployee(employeeDto: EmployeeDto, manager?: EntityManager) {
        const repo = manager ? manager.getRepository(Employee) : this.employeeRepository;

        const existingEmployee = await repo.findOne({
            where: { email: employeeDto.email }
        });

        if (existingEmployee) {
            throw new BadRequestException('Employee email already exists');
        }

        const hashedPassword = await this.hashProvider.createHash(employeeDto.password);

        let newEmployee = repo.create({
            name: employeeDto.name,
            email: employeeDto.email,
            password: hashedPassword,
            designation: employeeDto.designation,
            dob: employeeDto.dob,
            shop: employeeDto.shop
        });

        return await repo.save(newEmployee);
    }


    public async findByEmail(email: string){
        return await this.employeeRepository.findOne({where: {email}})
    }

    public async deleteEmployee(employeeId: number){
        try{
            const result = await this.employeeRepository.delete({id: employeeId})
            if (result.affected === 0) {
                throw new BadRequestException('Employee with this ID not found');
            }
            return {
                message: 'Employee details deleted successfully'
            }
        } catch(err: any){
            throw new ConflictException('Failed to delete employee')
        }
    }
    
    public async updateEmployee(empId: number,updateEmployeeDto: UpdateEmployeeDto){
        try{    
            let employee = await this.employeeRepository.findOneBy({id: empId})
            if(!employee){
                throw new BadRequestException('Employee not found')
            }
            employee.name = updateEmployeeDto?.name ?? employee.name
            employee.email = updateEmployeeDto?.email ?? employee.email
            employee.designation = updateEmployeeDto?.designation ?? employee.designation
            employee.dob = updateEmployeeDto.dob ? new Date(updateEmployeeDto.dob) : employee.dob

            employee = await this.employeeRepository.save(employee)
            
            return{
                message: 'Employee Details Updated Successfully',
                employee
            }

        }catch(err: any){   
            throw new ConflictException('Failed to update employee details, Internal Server Error')
        }
    }

    public async fetchEmployees(shopId: number,query: GetEmployeesDto){
        const {page = 1, limit = 1} = query

        const skip = (page - 1)*limit

        try{
            const [employees, total] = await this.employeeRepository.findAndCount({
                where: { shop: { id: shopId } },
                relations: ['shop'],
                skip,
                take: limit,
                order: { createdAt: 'DESC' }
            });
            const cleanedEmployees = employees.map(emp => {
                const { password, ...rest } = emp;
                return rest;
            });

            return {
                success: true,
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
                data: cleanedEmployees,
            };
        }   
        catch(err: any){
            throw new ConflictException('Failed to fetch employees data, Internal Server Error')
        }
    }
}
