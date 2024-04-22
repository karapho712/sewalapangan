import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1713605683947 implements MigrationInterface {
    name = 'InitialMigrations1713605683947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "occupant" character varying NOT NULL, "address" character varying NOT NULL, "handphone" character varying NOT NULL, "startDate" date NOT NULL, "startTime" TIME NOT NULL, "endTime" TIME NOT NULL, "total" integer NOT NULL, "status" character varying NOT NULL, "courtId" uuid, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nama" character varying NOT NULL, "harga" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_948a5d356c3083f3237ecbf9897" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_d1a3b2425cad80d4fcfccf561b0" FOREIGN KEY ("courtId") REFERENCES "courts"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_d1a3b2425cad80d4fcfccf561b0"`);
        await queryRunner.query(`DROP TABLE "courts"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
    }

}
