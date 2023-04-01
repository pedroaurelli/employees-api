import { v4 as uuidV4 } from 'uuid'
import { PrismaClient } from '@prisma/client'
import { UpsertEmployeeParamsDTO } from 'src/model/UpsertEmployeeParamsDTO'
import generateHashWithSalt from '../../../common/generateHashWithSalt'

export async function createEmployee (
  prisma: PrismaClient,
  params: UpsertEmployeeParamsDTO
): Promise<void> {

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
