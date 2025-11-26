import { Employee } from '../../employees/entities/employee.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'shop' })
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'shop_name', type: 'varchar', length: 255 })
  shopName: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  address?: string;

  @Column({ name: 'license_number', type: 'varchar', length: 100, nullable: true })
  licenseNumber?: string;

  @Column({ name: 'gst_number', type: 'varchar', length: 100, nullable: true })
  gstNumber?: string;

  // Future relations
  // @OneToMany(() => Inventory, (inventory) => inventory.shop)
  // inventories: Inventory[];

  // @OneToMany(() => Order, (order) => order.shop)
  // orders: Order[];

  @OneToMany(() => Employee, (employee) => employee.shop, { cascade: true })
  employees: Employee[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
