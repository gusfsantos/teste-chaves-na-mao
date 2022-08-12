import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetmanufactureService {
  constructor(private readonly httpService: HttpService) {}
  async getlist() {
    const url =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json';
    return this.httpService.get(url);
  }
}
