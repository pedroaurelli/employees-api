import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common'
import { EmployeeDTO } from 'src/dtos/EmployeeDTO'
import { EmployeeExistsMiddleware } from 'src/middleware/employeeExists.middleware'
import { EmployeeService } from './employee.service'
import { UpsertEmployeeParamsDTO } from 'src/dtos/UpsertEmployeeParamsDTO'
import { Public } from '../../common/decorators/SetMetadata'

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employee: EmployeeService) {}

  @Public()
  @Post()
  @UseInterceptors(EmployeeExistsMiddleware)
  async create(@Body() body: UpsertEmployeeParamsDTO) {
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
  async updateById(@Param('id') id: string, @Body() body: Partial<EmployeeDTO>) {
    return this.employee.updateById(id, body)
  }

  @Delete(':id')
  @UseInterceptors(EmployeeExistsMiddleware)
  async deleteById(@Param('id') id: string) {
    return this.employee.deleteById(id)
  }
}
