import { PrismaService } from 'src/database/prisma.service'
import { EmployeeResultDTO } from 'src/model/EmployeeResultDTO'

export async function getAllEmployees (
  prisma: PrismaService
): Promise<EmployeeResultDTO[]> {
  const employees = await prisma.employee.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      departament: true,
      manager: true
    }
  })

  return employees as EmployeeResultDTO[]
}

