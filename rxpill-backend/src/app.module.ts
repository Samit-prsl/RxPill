import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import  typeOrmConfig from '../typeorm.config';
import { redisConfig } from '../redis.config';
import { AuthModule } from './auth/auth.module';
import { EmployesModule } from './employes/employes.module';
import { ShopsModule } from './shops/shops.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenService } from './common/providers/token.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RedisModule.forRoot(redisConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
      secret: config.get<string>('JWT_ACCESS_SECRET'),
      signOptions: {
        expiresIn: (config.get<string>('JWT_ACCESS_EXPIRATION') || '15m') as any,
      },
    }),
    }),
    AuthModule,
    EmployesModule,
    ShopsModule,
  ],
  controllers: [AppController],
  providers: [AppService,TokenService],
  exports: [TokenService]
})
export class AppModule {}
