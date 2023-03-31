import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { Employee } from 'src/model/Employee'

@Injectable()
export class GetEmployeeById {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const employee = await this.prisma.employee.findFirst({
      where: {
        id
      }
    })

    return employee
  }
}
