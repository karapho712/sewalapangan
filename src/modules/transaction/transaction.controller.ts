import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTranscactionDto } from './dto/create-transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTranscactionDto) {
    return await this.transactionService.create(createTransactionDto);
  }

  @Get()
  async get() {
    return await this.transactionService.findAll();
  }
}
