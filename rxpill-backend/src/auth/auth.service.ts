import { BadRequestException, ConflictException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { EmployesService } from 'src/employees/employes.service';
import { DataSource } from 'typeorm';
import { Shop } from 'src/shops/entities/shop.entity';
import { TokenProvider } from 'src/common/providers/token.provider';
import { LoginDto } from './dto/login.dto';
import { HashProvider } from 'src/common/providers/hash.provider';
import { EmployeeDesignation } from 'src/employees/enums/employee-designation.enum';


@Injectable()
export class AuthService {
    constructor(
        private readonly employeeService: EmployesService,
        private readonly dataSource: DataSource,
        private readonly tokenProvider: TokenProvider,
        private readonly hashProvider: HashProvider
    ){}
    public async register(registerDto: RegisterDto){
        const queryRunner = this.dataSource.createQueryRunner()
        try{
            await queryRunner.connect()
            await queryRunner.startTransaction()

            const {name, email,password,shopName} = registerDto

            const shop = await queryRunner.manager.save(Shop, {
                shopName: shopName,
            }); 
            
            const owner = await this.employeeService.createEmployee(
                {
                    name,
                    email,
                    password,
                    designation: EmployeeDesignation.OWNER,
                    shop: { id: shop.id } 
                },
                    queryRunner.manager
                )

            if (!owner) {
                throw new ConflictException('Owner creation failed');
            }
            
            const token = await this.tokenProvider.signAccessToken({
                role: 'owner',
                email: owner?.email
            })
                
            await queryRunner.commitTransaction();

            return {
                token,
                message: 'User registered successfully',
                user: {
                    id: owner.id,
                    name: owner.name,
                    email: owner.email,
                    designation: owner.designation,
                    shopId: owner.shop,
                },
            };
            
        }catch(err: any){
            await queryRunner.rollbackTransaction()
            throw new ConflictException('Could not complete the Process',{
                description: String(err)
            })
        }finally {
            await queryRunner.release();
        }
    }

    public async login(loginDto: LoginDto){
        const {email,password} = loginDto

        const existingEmployee = await this.employeeService.findByEmail(email)
        if(!existingEmployee){
            throw new BadRequestException('Entered email is not registered')
        }

        const isPasswordCorrect = await this.hashProvider.comparePasswordWithHash(
            password,
            existingEmployee.password
        )
        if(!isPasswordCorrect){
            throw new BadRequestException('Invalid credentials')
        }

        const token = this.tokenProvider.signAccessToken({
            role: existingEmployee.designation,
            email: existingEmployee.email
        })

        return {
            token,
            user: {
                ...existingEmployee,
                password: null
            }
        }   
    }

}
