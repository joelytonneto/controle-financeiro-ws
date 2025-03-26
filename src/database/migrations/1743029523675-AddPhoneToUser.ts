import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneToUser1743029523675 implements MigrationInterface {
    name = 'AddPhoneToUser1743029523675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
