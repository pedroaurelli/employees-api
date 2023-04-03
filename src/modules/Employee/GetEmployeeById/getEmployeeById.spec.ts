import { mock } from 'jest-mock-extended'
import { PrismaService } from '../../../database/prisma.service'
import { Employee } from '@prisma/client'
import { getEmployeeById } from './getEmployeeById'

describe('getEmployeeById', () => {
  test('Return a employee with matching id', async () => {
    const employee: Employee = {
      createdAt: expect.any(Date),
      departament: 'T.I',
      email: 'john.doe@email.com',
      name: 'John Doe',
      id: 'random-id',
      password: 'pass',
      manager: false
    }
    const prisma = mock<PrismaService>({
      employee: {
        findUnique: jest.fn().mockResolvedValue(employee)
      }
    })

    const result = await getEmployeeById(prisma, employee.id)

    expect(result).toMatchObject({ id: employee.id })
  })
})
