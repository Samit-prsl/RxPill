import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFK1763356749466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createForeignKey(
            "employee",
            new TableForeignKey({
                name: "FK_employee_shop",
                columnNames: ["shop_id"],
                referencedTableName: "shop",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "employee",
            "FK_employee_shop"
        );
    }

}
