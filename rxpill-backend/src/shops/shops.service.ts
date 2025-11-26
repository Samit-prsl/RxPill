import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Repository } from 'typeorm';
import { UpdateShopDto } from './dto/update-shop.dto';

@Injectable()
export class ShopsService {
    constructor(
        @InjectRepository(Shop)
        private readonly shopRepository: Repository<Shop>
    ){}

    public async updateShopProfile(updateShopProfile: UpdateShopDto, shopId: number){
        try{
            let shop = await this.shopRepository.findOne({where:{id: shopId}})
            if(!shop){
                throw new BadRequestException('Shop not found')
            }
            shop.shopName = updateShopProfile.shopName ?? shop.shopName
            shop.address = updateShopProfile.address ?? shop.address
            shop.gstNumber = updateShopProfile.gstNumber ?? shop.gstNumber
            shop.licenseNumber = updateShopProfile.licenseNumber ?? shop.licenseNumber

            shop = await this.shopRepository.save(shop)

            return {
                message: 'Shop profile updated successfully',
                shop
            }
        }
        catch(err: any){
            throw new ConflictException('Failed to update company profile, Internal Server Error')
        }
    }
}
