import { Injectable } from '@nestjs/common';
import { studentInfos } from './entities/student-info.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StudentInfoService {
  constructor(
    @InjectModel(studentInfos)
    private studentInfoModel: typeof studentInfos,
  ) {}

  findAll() {
    return this.studentInfoModel.findAll();
  }
}
