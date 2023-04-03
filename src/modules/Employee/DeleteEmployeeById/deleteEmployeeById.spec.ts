import mock from 'jest-mock-extended/lib/Mock'
import { PrismaService } from '../../../database/prisma.service'
import { deleteEmployeeById } from './deleteEmployeeById'

describe('deleteEmployeeById', () => {
  test('Should delete a employee', async () => {
    const prisma = mock<PrismaService>({
      employee: {
        delete: jest.fn()
      }
    })
    const employeeId = 'random-id'

    await deleteEmployeeById(prisma, employeeId)

    expect(prisma.employee.delete).toHaveBeenCalledWith({
      where: {
        id: employeeId
      }
    })
  })
})
