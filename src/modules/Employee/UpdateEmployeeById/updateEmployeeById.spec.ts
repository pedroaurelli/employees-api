import { mock } from 'jest-mock-extended'
import { PrismaService } from '../../../database/prisma.service'
import { updateEmployeeById } from './updateEmployeeById'
import { UpsertEmployeeParamsDTO } from '../../../dtos/UpsertEmployeeParamsDTO'

describe('updateEmployeeById', () => {
  test('Should update employee data with correct params', async () => {
    const params: UpsertEmployeeParamsDTO = {
      email: 'newemail@email.com',
      name: 'Doe John',
      password: '',
      manager: false
    }
    const prisma = mock<PrismaService>({
      employee: {
        findFirst: jest.fn().mockResolvedValue(null)
      }
    })

    await updateEmployeeById(prisma,'random-id', params)

    expect(prisma.employee.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: params,
        where: {
          id: 'random-id'
        }
      })
    )
  })
})
