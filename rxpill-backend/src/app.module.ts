import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import  typeOrmConfig from '../typeorm.config';
import { redisConfig } from '../redis.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ShopsModule } from './shops/shops.module';

@Module({
    imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RedisModule.forRoot(redisConfig),
    UsersModule,
    AuthModule,
    ShopsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
