import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class ShopProfileDto {
  @ApiProperty({
    example: 'RxPill Pharmacy',
    description: 'Name of the shop',
  })
  @IsString()
  @IsNotEmpty()
  shopName: string;

  @ApiProperty({
    example: '123 MG Road, Kolkata, West Bengal',
    description: 'Address of the shop',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: 'Soumyajit De',
    description: 'Full name of the shop owner',
  })
  @IsString()
  @IsNotEmpty()
  ownerName: string;

  @ApiProperty({
    example: '+919876543210',
    description: 'Phone number of the shop owner',
  })
  @IsPhoneNumber('IN')
  @IsNotEmpty()
  ownerPhone: string;

  @ApiPropertyOptional({
    example: 'LIC12345',
    description: 'License number of the shop (optional)',
  })
  @IsString()
  @IsOptional()
  licenseNumber?: string;

  @ApiPropertyOptional({
    example: '29ABCDE1234F2Z5',
    description: 'GST number of the shop (optional)',
  })
  @IsString()
  @IsOptional()
  gstNumber?: string;
}
