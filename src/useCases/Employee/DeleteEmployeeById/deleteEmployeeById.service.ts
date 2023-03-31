import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class DeleteEmployeeById {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    await this.prisma.employee.delete({
      where: {
        id
      }
    })
  }
}
