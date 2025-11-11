import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateShop1762876885384 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
      new Table({
        name: "shops",
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true,
          },
          {
            name: "shop_name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar",
            length: "500",
            isNullable: false,
          },
          {
            name: "owner_name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "owner_phone",
            type: "varchar",
            length: "20",
            isNullable: false,
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
          {
            name: "user_id",
            type: "int",
            isNullable: false,
          },
        ],
      }),
      true
    )
        await queryRunner.createForeignKey(
        "shops",
        new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("shops");
        if (table) {
            const foreignKey = table.foreignKeys.find((fk) =>
                fk.columnNames.includes("user_id")
            );
            if (foreignKey) {
                await queryRunner.dropForeignKey("shops", foreignKey);
            }
        }

        await queryRunner.dropTable("shops");
            }
    

}
