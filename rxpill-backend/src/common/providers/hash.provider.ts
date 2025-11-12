import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'

@Injectable()
export class HashProvider{
    constructor(private readonly round = 10){}

    async createHash(password: string){
        const salt = await bcrypt.genSalt(this.round)
        return bcrypt.hash(password,salt)
    }

    async comparePasswordWithHas(password: string,hashedPassword: string){
        return bcrypt.compare(password,hashedPassword)
    }
}