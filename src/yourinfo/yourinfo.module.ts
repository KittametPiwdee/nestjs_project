import { Module } from '@nestjs/common';
import { YourinfoController } from './yourinfo.controller';
import { YourinfoService } from './yourinfo.service';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  imports: [UtilityModule],
  controllers: [YourinfoController],
  providers: [YourinfoService]
})
export class YourinfoModule {}
