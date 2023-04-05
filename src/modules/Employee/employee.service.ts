import { Injectable } from '@nestjs/common'
import { EmployeeDTO } from 'src/dtos/EmployeeDTO'
import { PrismaService } from 'src/database/prisma.service'
import { CreateEmployeeParamsDTO } from 'src/dtos/CreateEmployeeDTO'
import { createEmployee } from './CreateEmployee/createEmployee'
import { deleteEmployeeById } from './DeleteEmployeeById/deleteEmployeeById'
import { getAllEmployees } from './GetAllEmployees/getAllEmployees'
import { getEmployeeById } from './GetEmployeeById/getEmployeeById'
import { updateEmployeeById } from './UpdateEmployeeById/updateEmployeeById'

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(params: CreateEmployeeParamsDTO) {
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
