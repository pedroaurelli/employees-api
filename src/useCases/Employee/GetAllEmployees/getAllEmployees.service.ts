import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class GetAllEmployees {
  constructor(private prisma: PrismaService) {}

  async execute() {
    const employees = await this.prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        departament: true,
        manager: true
      }
    })

    return employees
  }
}
