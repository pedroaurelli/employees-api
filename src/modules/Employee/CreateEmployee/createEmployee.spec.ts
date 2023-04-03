import { mock } from 'jest-mock-extended'
import { PrismaService } from '../../../database/prisma.service'
import { createEmployee } from './createEmployee'
import { UpsertEmployeeParamsDTO } from '../../../dtos/UpsertEmployeeParamsDTO'

describe('createEmployee', () => {
  test('creates new employee', async () => {
    const prisma = mock<PrismaService>({
      employee: {
        create: jest.fn()
      }
    })
    const employee: UpsertEmployeeParamsDTO = {
      name: 'john doe',
      email: 'john.doe@email.test',
      manager: null,
      password: '123',
      departament: 'T.I'
    }

    await createEmployee(prisma, employee)

    expect(prisma.employee.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          email: employee.email,
          createdAt: expect.any(Date),
          password: expect.any(String),
          id: expect.any(String),
          departament: employee.departament,
          manager: employee.manager,
          name: employee.name
        }
      }))
  })
})
