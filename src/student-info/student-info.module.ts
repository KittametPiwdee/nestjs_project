import { Module } from '@nestjs/common';
import { StudentInfoController } from './student-info.controller';
import { StudentInfoService } from './student-info.service';
import { studentInfos } from './entities/student-info.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([studentInfos])],
  controllers: [StudentInfoController],
  providers: [StudentInfoService]
})
export class StudentInfoModule {}
