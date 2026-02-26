import { Controller, Get } from '@nestjs/common';
import { StudentInfoService } from './student-info.service';

@Controller('student-info')
export class StudentInfoController {
  constructor(private readonly studentInfoService: StudentInfoService) {}
  @Get()
  findAll() {
    return this.studentInfoService.findAll();
  }
}
