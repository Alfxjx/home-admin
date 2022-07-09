import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CafeController } from './cafe.controller';
import { CafeService } from './cafe.service';
import { Cafe, CafeSchema } from './schemas/cafe.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Cafe.name, schema: CafeSchema },
  ])],
  controllers: [CafeController],
  providers: [CafeService],
})
export class CafeModule { }
