import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class EmployeeExistsMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const employeeId = req.params.id
    const employee = await this.prisma.employee.findUnique({
      where: {
        id: employeeId
      }
    })

    if(!employee) {
      throw new NotFoundException(`Employee with id "${employeeId}" not exists`)
    }

    next()
  }
}
