import { EntityRef } from 'src/utils/entity-ref-abstract.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Court } from '../court/court.entity';

@Entity({ name: 'transactions' })
export class Transaction extends EntityRef {
  @Column()
  occupant: string;

  @Column()
  address: string;

  @Column()
  handphone: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'time' })
  startTime: Date;

  @Column({ type: 'time' })
  endTime: Date;

  @Column()
  total: number;

  @Column()
  status: string;

  @ManyToOne('courts', 'id', { onDelete: 'SET NULL', eager: true })
  @JoinColumn({ name: 'courtId' })
  court: EntityRef<Court>;
}
