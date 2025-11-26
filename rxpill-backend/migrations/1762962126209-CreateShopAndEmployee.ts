import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateShop1762962126209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shop',
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "shop_name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                     {
                        name: "address",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "license_number",
                        type: "varchar",
                        length: "100",
                        isNullable: true,
                    },
                    {
                        name: "gst_number",
                        type: "varchar",
                        length: "100",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ]
            })
        )
         await queryRunner.createTable(
            new Table({
                name: "employee",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "150",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "dob",
                        type: "date",
                        isNullable: true,
                    },
                    {
                        name: "designation",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "shop_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
)        }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("shop");
        await queryRunner.dropTable("employee");
    }

}
