import { Type } from 'class-transformer';
import { IsDate, IsMilitaryTime, IsString } from 'class-validator';
import { Court } from 'src/modules/court/court.entity';
import { EntityRef } from 'src/utils/entity-ref-abstract.entity';

export class CreateTranscactionDto {
  @IsString()
  occupant: string;

  @IsString()
  address: string;

  @IsString()
  handphone: string;

  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsMilitaryTime()
  startTime: Date;

  @IsMilitaryTime()
  endTime: Date;

  @IsString()
  court: EntityRef<Court>;
}
