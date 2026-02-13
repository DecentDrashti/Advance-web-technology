import { Controller,All, HttpCode, Get, Redirect, Header, Param, Post} from '@nestjs/common';
import { RoutingService } from './routing.service';
import { post } from 'axios';

@Controller('routing')
export class RoutingController {
    constructor(private readonly routingService: RoutingService) {}//dependency injection
    // all method handles all HTTP methods (GET, POST, PUT, DELETE, etc.) for the specified route.
  @All('all')
  handleAll() {
    return 'This route handles all HTTP methods';
  }

  @Get('status')
  @HttpCode(202)
  getStatus() {
    return 'Accepted request';
  }
  @Get('google')
  @Redirect('https://www.google.com', 302)
  redirectToGoogle() {}

  @Get('header')
  @Header('Custom-Header', 'NestJS')
  setHeader() {
    return 'Header added';
  }

 @Get('student/:id')//id ni agad : karva jaruri che karan ke id ek variable che je URL ma aavse student nai lakho to chalse 
 getStudent(@Param('id') id: string) {
    return `Student ID is ${id}`;
 }

 @Get('prime/:start/:end')
 getPrimes(
    @Param('start') start: string,
    @Param('end') end: string,
 ) {
  const s = parseInt(start);
  const e = parseInt(end);
  const primes:number[] = [];//ts che atle type number apvu padse 

  for (let i = s; i <= e; i++) {
    let isPrime = i > 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }

  return primes;
}

@Get('page/:pageNo')
getPage(@Param('pageNo') pageNo: string) {
  const page = parseInt(pageNo);
  const limit = 5;

  const start = (page - 1) * limit + 1;
  const end = page * limit;

  return {
    startRecord: start,
    endRecord: end,
  };


}

@Get()
  findAll() {
    return this.routingService.findAll();
  }

  @Post()
    findOne() {
        return this.routingService.findOne();// aiya hu get lakaht toi first vadi get findall che enuj print thase but post lakhta findone print thase
    }

}
