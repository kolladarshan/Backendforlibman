import { ,MiddlewareConsumer,Module,RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from  '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { AdminModule } from './admin/admin.module';
import { CurrentuserMiddleware } from './admin/middleware/user-utility';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...dataSourceOptions 

  }),AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
export class AppModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentuserMiddleware)
      .forRoutes({path:'*',method : RequestMethod.ALL});
  }
}
