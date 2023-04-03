import { ConflictException, Injectable, NestMiddleware, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class EmployeeExistsMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const employeeId = req.params.id
    const employeeEmail = req?.body.email

    const where: Prisma.EmployeeWhereInput = {}

    console.log(Boolean(employeeId))
    console.log(employeeEmail)

    if(employeeId) where.id = employeeId
    if(employeeEmail && !employeeId) where.email = employeeEmail

    console.log(where)

    const employee = await this.prisma.employee.findFirst({
      where
    })

    if(where.id && !employee) {
      throw new NotFoundException(`Employee with id "${employeeId}" not exists`)
    }

    if(where.email && employee) {
      throw new ConflictException(`Employee with email "${employee.email}" already exists`)
    }


    next()
  }
}
