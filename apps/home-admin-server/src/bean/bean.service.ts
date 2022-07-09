import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bean, BeanDocument } from './schemas/bean.schema';

@Injectable()
export class BeanService {
  constructor(
    @InjectModel(Bean.name)
    private readonly cafeModel: Model<BeanDocument>,
  ) { }

  private logger = new Logger(BeanService.name);

  async findAll() { }

  async findOneByID(id) { }

  async addNewOne(DTO) { }

  async updateOne(DTO) { }

  async delByID(id) { }
}
