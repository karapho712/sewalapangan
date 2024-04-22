import { Factory, Seeder } from 'typeorm-seeding';
import { Court } from '../court.entity';

export class CourtCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Court)().create({
      nama: 'Lapangan 1',
      harga: 50000,
      createdAt: new Date(),
    });

    await factory(Court)().create({
      nama: 'Lapangan 2',
      harga: 100000,
      createdAt: new Date(),
    });

    await factory(Court)().create({
      nama: 'Lapangan 3',
      harga: 200000,
      createdAt: new Date(),
    });
  }
}
