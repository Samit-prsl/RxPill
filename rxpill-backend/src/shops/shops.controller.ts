import { Body, Controller, Param, ParseIntPipe, Patch } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { UpdateShopDto } from "./dto/update-shop.dto";
import { ShopsService } from "./shops.service";
import { Roles } from "src/auth/decorators/roles.decorator";

@Controller('shops')
export class ShopController{
    constructor(
        private readonly shopService: ShopsService
    ){}
    @ApiOperation({
        summary: 'Complete Shop Profile'
    })
    @ApiResponse({
        status: 200,
        description: 'Shop Updated successfully'
    })
    @Roles('owner')
    @Patch(':shopId')
    async updateCompanyProfile(
        @Body() updateShopDto: UpdateShopDto,
        @Param('shopId',ParseIntPipe) shopId: number 
    ){
     return await this.shopService.updateShopProfile(updateShopDto,shopId)  
    }
}