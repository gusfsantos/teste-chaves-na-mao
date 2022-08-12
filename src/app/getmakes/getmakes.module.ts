import { Module } from '@nestjs/common';
import { GetmakesService } from './getmakes.service';
import { GetmakesController } from './getmakes.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [GetmakesService],
  imports: [HttpModule],
  controllers: [GetmakesController],
})
export class GetmakesModule {}
