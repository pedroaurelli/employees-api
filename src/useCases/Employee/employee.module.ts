import { Module } from '@nestjs/common'
import { EmployeeController } from './employee.controller'
import { PrismaService } from 'src/database/prisma.service'
import { CreateEmployeeService } from './CreateEmployee/createEmployee.service'
import { GetAllEmployees } from './GetAllEmployees/getAllEmployees.service'

@Module({
  controllers: [EmployeeController],
  providers: [PrismaService, CreateEmployeeService, GetAllEmployees]
})

export class EmployeeModule {}
