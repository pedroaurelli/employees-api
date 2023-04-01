import { Employee, PrismaClient } from '@prisma/client'

export async function updateEmployeeById (
  prisma: PrismaClient,
  id: string,
  employee: Partial<Employee>
): Promise<void> {

  await prisma.employee.update({
    where: {
      id
    },
    data: employee
  })

}
