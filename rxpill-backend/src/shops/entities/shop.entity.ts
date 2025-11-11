import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';


@Entity({ name: 'shops' })
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'shop_name', type: 'varchar', length: 255 })
  shopName: string;

  @Column({ type: 'varchar', length: 500 })
  address: string;

  @Column({ name: 'owner_name', type: 'varchar', length: 255 })
  ownerName: string;

  @Column({ name: 'owner_phone', type: 'varchar', length: 20 })
  ownerPhone: string;

  @Column({ name: 'license_number', type: 'varchar', length: 100, nullable: true })
  licenseNumber?: string;

  @Column({ name: 'gst_number', type: 'varchar', length: 100, nullable: true })
  gstNumber?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.shops, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
