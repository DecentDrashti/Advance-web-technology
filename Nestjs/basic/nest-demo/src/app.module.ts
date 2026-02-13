import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { DemoController } from './demo/demo.controller';
import { RoutingController } from './routing/routing.controller';

import { RoutingService } from './routing/routing.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, StudentController, DemoController, RoutingController],
  providers: [AppService, RoutingService],
})
export class AppModule {}
