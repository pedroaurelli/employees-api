import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import signIn from './signIn'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    return signIn(this.prisma, this.jwtService, email, password)
  }
}
