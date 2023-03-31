import { UpsertEmployeeParams } from 'src/model/Employee'
import { PrismaService } from 'src/database/prisma.service'
import { v4 as uuidV4 } from 'uuid'
import { Injectable } from '@nestjs/common'
import generateHashWithSalt from 'src/common/generateHashWithSalt'

@Injectable()
export class CreateEmployeeService {
  constructor(private prisma: PrismaService) {}

  async execute(params: UpsertEmployeeParams): Promise<void> {
    const { name, email, password, manager, departament } = params

    const id = uuidV4()

    const hashedPassword = generateHashWithSalt(password)

    await this.prisma.employee.create({
      data: {
        id,
        name,
        email,
        password: hashedPassword,
        manager,
        departament,
        createdAt: new Date()
      }
    })
  }
}
