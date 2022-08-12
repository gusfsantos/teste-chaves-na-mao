import { Module } from '@nestjs/common';
import { GetmanufactureModule } from './app/getmanufacture/getmanufacture.module';
import { GetmakesModule } from './app/getmakes/getmakes.module';

@Module({
  imports: [GetmanufactureModule, GetmakesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
