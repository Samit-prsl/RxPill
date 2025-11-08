import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import  typeOrmConfig from '../typeorm.config';
import { redisConfig } from '../redis.config';

@Module({
    imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RedisModule.forRoot(redisConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
