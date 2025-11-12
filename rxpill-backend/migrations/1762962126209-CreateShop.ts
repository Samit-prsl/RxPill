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
        true
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("shop");
    }

}
