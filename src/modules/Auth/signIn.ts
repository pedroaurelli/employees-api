import { UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { JwtService } from '@nestjs/jwt'
import generateHashWithSalt from '../../common/generateHashWithSalt'

export default async function signIn(
  prisma: PrismaService,
  jwtService: JwtService,
  email: string,
  password: string
) {
  const user = await prisma.employee.findFirst({
    where: {
      email
    }
  })

  const hashedPassword = generateHashWithSalt(password)

  if (user.password !== hashedPassword) {
    throw new UnauthorizedException()
  }

  return {
    access_token: await jwtService.signAsync({
      username: user.name,
      id: user.id
    })
  }
}
