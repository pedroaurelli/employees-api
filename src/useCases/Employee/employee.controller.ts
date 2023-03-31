import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common'
import { UpsertEmployeeParams, Employee } from 'src/model/Employee'
import { CreateEmployeeService } from './CreateEmployee/createEmployee.service'
import { GetAllEmployees } from './GetAllEmployees/getAllEmployees.service'
import { DeleteEmployeeById } from './DeleteEmployeeById/deleteEmployeeById.service'
import { UpdateEmployeeById } from './UpdateEmployeeById/updateEmployeeById.service'
import { EmployeeExistsMiddleware } from 'src/middleware/employee-exists.middleware'
import { GetEmployeeById } from './GetEmployeeById/getEmployeeById.service'

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly createEmployee: CreateEmployeeService,
    private readonly getAllEmployees: GetAllEmployees,
    private readonly deleteEmployeeById: DeleteEmployeeById,
    private readonly updateEmployeeById: UpdateEmployeeById,
    private readonly getEmployeeById: GetEmployeeById
  ) {}

  @Post()
  async create(@Body() body: UpsertEmployeeParams) {
    return this.createEmployee.execute(body)
  }

  @Get()
  async findAll() {
    return this.getAllEmployees.execute()
  }

  @Get(':id')
  @UseInterceptors(EmployeeExistsMiddleware)
  async getById(@Param('id') id: string) {
    return this.getEmployeeById.execute(id)
  }

  @Patch(':id')
  @UseInterceptors(EmployeeExistsMiddleware)
  async updateById(@Param('id') id: string, @Body() body: Partial<Employee>) {
    return this.updateEmployeeById.execute(id, body)
  }

  @Delete(':id')
  @UseInterceptors(EmployeeExistsMiddleware)
  async deleteById(@Param('id') id: string) {
    return this.deleteEmployeeById.execute(id)
  }
}
