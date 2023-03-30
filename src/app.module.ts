import { Module } from '@nestjs/common'
import { EmployeeModule } from './useCases/Employee/employee.module'

@Module({
  imports: [EmployeeModule],
  controllers: [],
  providers: []
})
export class AppModule {}
