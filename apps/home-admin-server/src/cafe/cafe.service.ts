import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cafe, CafeDocument } from './schemas/cafe.schema';

@Injectable()
export class CafeService {
  constructor(
    @InjectModel(Cafe.name)
    private readonly cafeModel: Model<CafeDocument>,
  ) { }

  private logger = new Logger(CafeService.name);

  async findAll() { }

  async findOneByID(id) { }

  async addNewOne(DTO) { }

  async updateOne(DTO) { }

  async delByID(id) { }
}
