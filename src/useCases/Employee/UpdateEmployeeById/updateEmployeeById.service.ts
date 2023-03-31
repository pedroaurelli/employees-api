import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { Employee, UpsertEmployeeParams } from 'src/model/Employee'

@Injectable()
export class UpdateEmployeeById {
  constructor (private prisma: PrismaService) {}

  async execute(id: string, employee: Partial<UpsertEmployeeParams>) {
    await this.prisma.employee.update({
      where: {
        id
      },
      data: employee
    })
  }
}
