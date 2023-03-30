import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateEmployeeParams } from 'src/model/Employee'
import { CreateEmployeeService } from './CreateEmployee/createEmployee.service'
import { GetAllEmployees } from './GetAllEmployees/getAllEmployees.service'

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly createEmployee: CreateEmployeeService,
    private readonly getAllEmployees: GetAllEmployees
  ) {}

  @Post()
  async create(@Body() body: CreateEmployeeParams) {

    await this.createEmployee.execute(body)
  }

  @Get()
  async findAll() {
    await this.getAllEmployees.execute()
  }
}
