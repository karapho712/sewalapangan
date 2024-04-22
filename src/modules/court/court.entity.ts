import { EntityRef } from 'src/utils/entity-ref-abstract.entity';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'courts' })
export class Court extends EntityRef {
  @Column()
  nama: string;

  @Column()
  harga: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;
}
