import { PrismaClient } from '@prisma/client'
import { EmployeeDTO } from '../../../dtos/EmployeeDTO'

export async function getEmployeeById (
  prisma: PrismaClient,
  id: string
): Promise<EmployeeDTO> {
  const employee = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  return employee as EmployeeDTO
}

