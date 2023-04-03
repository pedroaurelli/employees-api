import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { EmployeeModule } from '../Employee/employee.module'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from '../../database/prisma.service'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth.guard'

@Module({
  imports: [
    EmployeeModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [
    AuthService,
    PrismaService
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
