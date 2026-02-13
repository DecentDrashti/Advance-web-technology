import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('demo')
export class DemoController {
    @Get('abcd/*') //localhost:3000/demo/abcd/ only work and localhost:3000/demo/abcd/anything will work but localhost:3000/demo/abcd will not work and abcd* will not work
    findAll() { 
        return 'This route uses a wildcard'; 
    }
    @Get('status') 
    @HttpCode(204) 
    find() { 
        return 'This will be returned with 204 status code'; 
    } 
}
