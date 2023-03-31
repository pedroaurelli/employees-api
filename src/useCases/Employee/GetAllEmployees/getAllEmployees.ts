import { PrismaService } from 'src/database/prisma.service'

export async function getAllEmployees (prisma: PrismaService) {
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

  return employees
}

