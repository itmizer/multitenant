import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@/infra/orm/sequelize/sequelize.module';

@Module({
  imports: [SequelizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
