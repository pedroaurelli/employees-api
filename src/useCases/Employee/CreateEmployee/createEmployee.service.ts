import { CreateEmployeeParams } from 'src/model/Employee'
import { PrismaService } from 'src/database/prisma.service'
import { v4 as uuidV4 } from 'uuid'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateEmployeeService {
  constructor(private prisma: PrismaService) {}

  async execute(params: CreateEmployeeParams): Promise<void> {
    const { name, email, password, manager, departament } = params

    const id = uuidV4()

    await this.prisma.employee.create({
      data: {
        id,
        name,
        email,
        password,
        manager,
        departament,
        createdAt: new Date()
      }
    })
  }
}
