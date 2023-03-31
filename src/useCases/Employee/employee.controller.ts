import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common'
import { UpsertEmployeeParams, Employee } from 'src/model/Employee'
import { EmployeeExistsMiddleware } from 'src/middleware/employeeExists.middleware'
import { EmployeeService } from './employee.service'

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employee: EmployeeService) {}

  @Post()
  async create(@Body() body: UpsertEmployeeParams) {
    return this.employee.create(body)
  }

  @Get()
  async findAll() {
    return this.employee.getAll()
  }

  @Get(':id')
  @UseInterceptors(EmployeeExistsMiddleware)
  async getById(@Param('id') id: string) {
    return this.employee.getById(id)
  }

  @Patch(':id')
  @UseInterceptors(EmployeeExistsMiddleware)
  async updateById(@Param('id') id: string, @Body() body: Partial<Employee>) {
    return this.employee.updateById(id, body)
  }

  @Delete(':id')
  @UseInterceptors(EmployeeExistsMiddleware)
  async deleteById(@Param('id') id: string) {
    return this.employee.deleteById(id)
  }
}
