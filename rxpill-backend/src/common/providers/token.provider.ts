import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenProvider{
    constructor(private readonly jwtService: JwtService){}

    signAccessToken(payload: { role: string; email: string }) {
        return this.jwtService.sign(payload, {
            expiresIn: Number(process.env.JWT_ACCESS_EXPIRATION as any) || 900,
            secret: process.env.JWT_ACCESS_SECRET!,
        });
    
    }

    verifyAccessToken(token: string) {
        return this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET,
        });
    }
}