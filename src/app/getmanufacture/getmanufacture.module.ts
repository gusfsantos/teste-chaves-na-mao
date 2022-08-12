import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GetmanufactureService } from './getmanufacture.service';
import { GetmanufactureController } from './getmanufacture.controller';

@Module({
  providers: [GetmanufactureService],
  imports: [HttpModule],
  controllers: [GetmanufactureController],
})
export class GetmanufactureModule {}
