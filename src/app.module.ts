import { Module } from '@nestjs/common'
import { AppController } from './useCases/HelloWorld/app.controller'
import { AppService } from './useCases/HelloWorld/app.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
