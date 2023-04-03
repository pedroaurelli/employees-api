import { Module } from '@nestjs/common'
import { AuthModule } from './modules/Auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './modules/Auth/auth.guard'
import { EmployeeModule } from './modules/Employee/employee.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env']
    }),
    EmployeeModule,
    AuthModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
