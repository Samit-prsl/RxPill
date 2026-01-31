import {api} from '../lib/api.ts'
const API_BASE_URL = 'http://localhost:3000'

export interface RegisterPayload{
    name: string;
    email: string;
    password: string;
    shopName: string;
}

export interface LoginPayload{
    email: string;
    password: string;
}

export interface RegisterResponse{
    message:string;
}

export interface LoginResponse{
    message: string;
}

export const authService = {
    register:(data: RegisterPayload) => {
        return api<RegisterResponse>(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },

    login:(data: LoginPayload) => {
        return api<LoginResponse>(`${API_BASE_URL}/auth/login`,{
            method: 'POST',
            body: JSON.stringify(data),
        })
    }
}