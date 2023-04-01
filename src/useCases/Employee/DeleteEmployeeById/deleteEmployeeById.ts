import { PrismaService } from 'src/database/prisma.service'

export async function deleteEmployeeById (
  prisma: PrismaService,
  id: string
): Promise<void> {
  await prisma.employee.delete({
    where: {
      id
    }
  })
}
