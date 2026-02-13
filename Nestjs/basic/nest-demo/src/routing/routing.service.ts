import { Injectable } from '@nestjs/common';

@Injectable()
export class RoutingService {
 findAll() {
    return 'Hello world';
 }

  findOne() {
    return 'Hello from find one';
  }
}
