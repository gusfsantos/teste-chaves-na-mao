import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';

@Controller('/vehicles/manufacturers')
export class GetmanufactureController {
  constructor(private readonly httpService: HttpService) {}
  @Get()
  getall() {
    const url =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json';
    return this.httpService.get(url);
  }
}
