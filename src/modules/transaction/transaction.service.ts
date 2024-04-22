import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { Repository } from 'typeorm';
import { CreateTranscactionDto } from './dto/create-transaction.dto';
import dataSource from 'src/db/data-source';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async checkAvailability(startDate: any, startTime: any, endTime: any) {
    const check = await this.transactionRepository
      .createQueryBuilder('transactions')
      .where('transactions.startDate = :startDate', { startDate: startDate })
      .andWhere(
        '( :startTime BETWEEN transactions.startTime AND transactions.endTime OR :endTime BETWEEN transactions.startTime AND transactions.endTime OR transactions.startTime BETWEEN :startTime AND :endTime )',
        { startTime, endTime },
      )
      .getOne();

    return check;
  }

  async create(createTransactionDto: CreateTranscactionDto) {
    const check = await this.checkAvailability(
      createTransactionDto.startDate,
      createTransactionDto.startTime,
      createTransactionDto.endTime,
    );
    if (check) throw new ConflictException('Already booked');

    return dataSource.manager.transaction(async (entityManager) => {
      const trxTransactionRepository = entityManager.getRepository(Transaction);

      return trxTransactionRepository.save(
        this.transactionRepository.create({
          ...createTransactionDto,
          total: 9,
          status: 'booking',
        }),
      );
    });
  }

  async findAll() {
    const transaction = await this.transactionRepository.find();
    return transaction;
  }
}
