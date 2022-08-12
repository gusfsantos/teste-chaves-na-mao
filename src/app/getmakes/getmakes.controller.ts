import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/vehicles/makes')
export class GetmakesController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  findAll() {
    const url =
      'https://vpic.nhtsa.dot.gov/api/vehicles/vehicles/GetAllMakes?format=json';
    return this.httpService.get(url);
  }

  @Get('/:id/models')
  findmodels(@Param() params) {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/vehicles/GetModelsForMakeId/${params.id}?format=json`;
    return this.httpService.get(url);
  }

  @Get('/:makeId/models/:modelId')
  findonemodel(@Param() params) {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/vehicles/GetModelsForMakeId/${params.modelId}?format=json`;
    return this.httpService.get(url);
  }
}
