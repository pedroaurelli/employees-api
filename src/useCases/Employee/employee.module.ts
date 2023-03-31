import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { EmployeeController } from './employee.controller'
import { PrismaService } from 'src/database/prisma.service'
import { CreateEmployeeService } from './CreateEmployee/createEmployee.service'
import { GetAllEmployees } from './GetAllEmployees/getAllEmployees.service'
import { DeleteEmployeeById } from './DeleteEmployeeById/deleteEmployeeById.service'
import { UpdateEmployeeById } from './UpdateEmployeeById/updateEmployeeById.service'
import { EmployeeExistsMiddleware } from 'src/middleware/employee-exists.middleware'
import { GetEmployeeById } from './GetEmployeeById/getEmployeeById.service'

@Module({
  controllers: [EmployeeController],
  providers: [PrismaService, CreateEmployeeService, GetAllEmployees, DeleteEmployeeById, UpdateEmployeeById, GetEmployeeById]
})

export class EmployeeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EmployeeExistsMiddleware)
      .forRoutes('employee/:id')
  }
}
