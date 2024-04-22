import { randLastName, randNumber, randUuid } from '@ngneat/falso';
import { Court } from '../court.entity';
import { define } from 'typeorm-seeding';

define(Court, () => {
  const court = new Court(randUuid());

  court.harga = randNumber();
  court.nama = randLastName();

  return court;
});
