import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Test1762582016184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
           new Table({
             name: 'test_table',
             columns: [
               {
                 name: 'id',
                 type: 'serial',
                 isPrimary: true,
               },
               {
                 name: 'name',
                 type: 'varchar',
                 length: '100',
                 isNullable: false,
               },
               {
                 name: 'created_at',
                 type: 'timestamp',
                 default: 'CURRENT_TIMESTAMP',
               },
             ],
           }),
           true,
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("test_table")
    }

}
