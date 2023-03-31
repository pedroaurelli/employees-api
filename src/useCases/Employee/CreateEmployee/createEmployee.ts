import { UpsertEmployeeParams } from 'src/model/Employee'
import { v4 as uuidV4 } from 'uuid'
import generateHashWithSalt from 'src/common/generateHashWithSalt'
import { PrismaClient } from '@prisma/client'

export async function createEmployee (
  prisma: PrismaClient,
  params: UpsertEmployeeParams
) {

  const { name, email, password, manager, departament } = params

  const id = uuidV4()

  const hashedPassword = generateHashWithSalt(password)

  await prisma.employee.create({
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
