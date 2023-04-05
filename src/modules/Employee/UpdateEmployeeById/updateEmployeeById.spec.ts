import { mock } from 'jest-mock-extended'
import { PrismaService } from '../../../database/prisma.service'
import { updateEmployeeById } from './updateEmployeeById'
import { CreateEmployeeParamsDTO } from '../../../dtos/CreateEmployeeDTO'

describe('updateEmployeeById', () => {
  test('Should update employee data with correct params', async () => {
    const params: CreateEmployeeParamsDTO = {
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
