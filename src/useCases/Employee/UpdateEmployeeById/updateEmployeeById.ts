import { Employee, PrismaClient } from '@prisma/client'

export async function updateEmployeeById (
  prisma: PrismaClient,
  id: string,
  employee: Partial<Employee>
) {

  await prisma.employee.update({
    where: {
      id
    },
    data: employee
  })

}
