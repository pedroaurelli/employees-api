import { ConflictException, Injectable, NestMiddleware, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { IsEmail, IsOptional, IsString } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class EmployeeExistsMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    class EmployeeParamsDTO {
      @IsString()
        id: string

      @IsEmail()
        email: string | null
    }
    const employeeParams:EmployeeParamsDTO = {
      id: req.params.id,
      email: req.body.email
    }

    const where: Prisma.EmployeeWhereInput = {}

    if(employeeParams.id) where.id = employeeParams.id
    if(employeeParams.email && !employeeParams.id) where.email = employeeParams.email

    const employee = await this.prisma.employee.findFirst({
      where
    })

    if(where.id && !employee) {
      throw new NotFoundException(`Employee with id "${employee.id}" not exists`)
    }

    if(where.email && employee) {
      throw new ConflictException(`Employee with email "${employee.email}" already exists`)
    }


    next()
  }
}
