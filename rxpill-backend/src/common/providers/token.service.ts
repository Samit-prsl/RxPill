import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService{
    constructor(private readonly jwtService: JwtService){}

    signAccessToken(payload: { role: string; email: string }) {
        return this.jwtService.sign(payload, {
        expiresIn: (process.env.JWT_ACCESS_EXPIRATION as any) || '15m',
        secret: process.env.JWT_ACCESS_SECRET!,
        });
    
    }

    verifyAccessToken(token: string) {
        return this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET,
        });
    }
}