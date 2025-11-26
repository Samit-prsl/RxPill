import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { ShopController } from './shops.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shop])
  ],
  controllers: [ShopController],
  providers: [ShopsService]
})
export class ShopsModule {}
