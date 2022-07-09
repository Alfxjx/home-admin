import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeanModule } from '../bean/bean.module';
import { CafeModule } from '../cafe/cafe.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Payment, PaymentSchema } from './schemas/payment.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]), CafeModule, BeanModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule { }
