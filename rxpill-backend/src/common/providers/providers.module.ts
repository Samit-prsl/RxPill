import { Module } from '@nestjs/common';
import { HashProvider } from './hash.provider';
import { TokenProvider } from './token.provider';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
     JwtModule.register({
        secret: process.env.JWT_ACCESS_SECRET,
        signOptions: {
            expiresIn: Number(process.env.JWT_ACCESS_EXPIRATION as string) || 900,
        },
    }),
  ],
  providers: [HashProvider,TokenProvider],
  exports: [HashProvider,TokenProvider],
})
export class ProvidersModule {}
