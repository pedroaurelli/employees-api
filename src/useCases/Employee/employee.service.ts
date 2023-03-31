import { Injectable } from '@nestjs/common'
import { Employee, UpsertEmployeeParams } from 'src/model/Employee'
import { createEmployee } from './CreateEmployee/createEmployee'
import { PrismaService } from 'src/database/prisma.service'
import { getEmployeeById } from './GetEmployeeById/getEmployeeById'
import { updateEmployeeById } from './UpdateEmployeeById/updateEmployeeById'
import { getAllEmployees } from './GetAllEmployees/getAllEmployees'
import { deleteEmployeeById } from './DeleteEmployeeById/deleteEmployeeById'

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(params: UpsertEmployeeParams) {
    return createEmployee(this.prisma, params)
  }

  async updateById(id: string, params: Partial<Employee>) {
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
