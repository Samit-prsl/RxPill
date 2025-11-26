import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}
    @Public()
    @Post('register')
    @ApiOperation({
        summary: 'Register your shop'
    })
    @ApiResponse({
        status: 201,
        description: 'Shop registered successfully'
    })
    async register(
        @Body() registerDto: RegisterDto,
        @Res({ passthrough: true }) res: Response,
    ){
        const { token, user } = await this.authService.register(registerDto); 
        res.cookie('access_token', token, {
            httpOnly: true,
            sameSite: 'strict',
            secure: false, 
            maxAge: 15 * 60 * 1000, 
        });
        return {
            message: 'Registration successful',
            user,
        };
    }

    @Public()
    @Post('login')
    @ApiOperation({
        summary: 'Login with your email and password'
    })
    @ApiResponse({
        status: 200,
        description: 'Logged in successfully'
    })
    async login(
        @Body() loginDto: LoginDto,
        @Res({ passthrough: true}) res: Response
    ){
        const {token,user} = await this.authService.login(loginDto)
        res.cookie('access_token', token, {
            httpOnly: true,
            sameSite: 'strict',
            secure: false, 
            maxAge: 15 * 60 * 1000, 
        });
        return{
            message: 'Logged in successfully',
            user
        }
    }

    @Public()
    @Post('logout')
    @ApiOperation({
        summary: 'Logout user by clearing authentication cookie'
    })
    @ApiResponse({
        status: 200,
        description: 'Logged out successfully'
    })
    async logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('access_token', {
            httpOnly: true,
            sameSite: 'strict',
            secure: false,  
        });
        return {
            message: 'Logged out successfully',
        };
    }

}
