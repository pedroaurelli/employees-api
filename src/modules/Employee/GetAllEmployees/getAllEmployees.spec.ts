import { mock, mockDeep } from 'jest-mock-extended'
import { PrismaService } from '../../../database/prisma.service'
import { getAllEmployees } from './getAllEmployees'
import { Employee } from '@prisma/client'

describe('getAllEmployees', () => {
  test('Call prisma.findMany method', async () => {
    const prisma = mock<PrismaService>({
      employee: {
        findMany: jest.fn()
      }
    })

    await getAllEmployees(prisma)

    expect(prisma.employee.findMany).toHaveBeenCalled()
  })

  test('Return employees list', async () => {
    const employees: Employee[] = [
      {
        createdAt: expect.any(Date),
        departament: 'T.I',
        email: 'john.doe@email.com',
        name: 'John Doe',
        id: 'random-id',
        password: 'pass',
        manager: false
      },
      {
        createdAt: expect.any(Date),
        departament: 'T.I',
        email: 'john.doe2@email.com',
        name: 'John Doe 2',
        id: 'random-id2',
        password: 'pass2',
        manager: false
      }
    ]
    const prisma = mock<PrismaService>({
      employee: {
        findMany: jest.fn().mockResolvedValue(employees)
      }
    })

    const result = await getAllEmployees(prisma)

    expect(result).toHaveLength(2)
  })
})
