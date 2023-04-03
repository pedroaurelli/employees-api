import { Module } from '@nestjs/common'
import { EmployeeModule } from './useCases/Employee/employee.module'
import { AuthModule } from './useCases/Auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './useCases/Auth/auth.guard'

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
