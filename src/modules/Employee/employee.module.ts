import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { EmployeeController } from './employee.controller'
import { PrismaService } from 'src/database/prisma.service'
import { EmployeeExistsMiddleware } from 'src/middleware/employeeExists.middleware'
import { EmployeeService } from './employee.service'

@Module({
  controllers: [EmployeeController],
  providers: [
    PrismaService,
    EmployeeService
  ]
})

export class EmployeeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EmployeeExistsMiddleware)
      .forRoutes('employee/:id', 'employee')
  }
}
