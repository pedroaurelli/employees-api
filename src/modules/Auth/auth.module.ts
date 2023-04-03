import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from '../../database/prisma.service'
import { EmployeeModule } from '../Employee/employee.module'

@Module({
  imports: [
    EmployeeModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' }
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
