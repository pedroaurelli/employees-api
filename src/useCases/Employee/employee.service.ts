import { Injectable } from '@nestjs/common'
import { EmployeeDTO } from 'src/model/EmployeeDTO'
import { createEmployee } from './CreateEmployee/createEmployee'
import { PrismaService } from 'src/database/prisma.service'
import { getEmployeeById } from './GetEmployeeById/getEmployeeById'
import { updateEmployeeById } from './UpdateEmployeeById/updateEmployeeById'
import { getAllEmployees } from './GetAllEmployees/getAllEmployees'
import { deleteEmployeeById } from './DeleteEmployeeById/deleteEmployeeById'
import { UpsertEmployeeParamsDTO } from 'src/model/UpsertEmployeeParamsDTO'

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(params: UpsertEmployeeParamsDTO) {
    return createEmployee(this.prisma, params)
  }

  async updateById(id: string, params: Partial<EmployeeDTO>) {
    return updateEmployeeById(this.prisma, id, params)
  }

  async deleteById(id: string) {
    return deleteEmployeeById(this.prisma, id)
  }

  async getAll() {
    return getAllEmployees(this.prisma)
  }

  async getById(id: string) {
    return getEmployeeById(this.prisma, id)
  }
}
