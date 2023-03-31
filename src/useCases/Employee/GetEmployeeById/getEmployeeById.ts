import { PrismaClient } from '@prisma/client'

export async function getEmployeeById (
  prisma: PrismaClient,
  id: string
) {
  const employee = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  return employee
}

