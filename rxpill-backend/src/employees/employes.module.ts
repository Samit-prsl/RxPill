import { Module } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from 'src/common/providers/providers.module';
import { EmployesController } from './employes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    ProvidersModule
  ],
  controllers: [EmployesController],
  providers: [EmployesService],
  exports: [EmployesService]
})
export class EmployesModule {}
