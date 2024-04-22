import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource, { dataSourceOptions } from './db/data-source';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      ...dataSourceOptions,
      useFactory: () => ({ autoLoadEntities: true }),
      dataSourceFactory: async () => await dataSource.initialize(),
    }),
    TransactionModule,
  ],
})
export class AppModule {}
