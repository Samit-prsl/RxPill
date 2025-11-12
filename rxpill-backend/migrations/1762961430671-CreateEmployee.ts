import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEmployee1762961430671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
                        name: "age",
                        type: "int",
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
                ],
            }),
            true
        );
        await queryRunner.createForeignKey(
            "employee",
            new TableForeignKey({
                columnNames: ["shop_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "shop",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employee");
    }

}
