import { Module } from '@nestjs/common';
import { EmployesService } from './employes.service';

@Module({
  providers: [EmployesService]
})
export class EmployesModule {}
