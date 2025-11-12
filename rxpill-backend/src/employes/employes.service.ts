import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployesService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>
    ){}

    
}
