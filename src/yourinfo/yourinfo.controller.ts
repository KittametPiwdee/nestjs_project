import { Controller, Get } from '@nestjs/common';
import { YourinfoService } from './yourinfo.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('yourinfo')
export class YourinfoController {
    constructor(private readonly yourinfoService: YourinfoService,
                private readonly utillityService: UtilityService,
                private readonly globalHelperService: GlobalHelperService
    ) {}

    @Get('/global')
    globalFunc(): string {
        return this.globalHelperService.globalFunc();
    }

    @Get('/shared')
    sharedFunc(): string {
        return this.utillityService.shareFunc();
    }
    
    @Get() //localhost:3000/yourinfo
    yourinfoFunc(){
    return this.yourinfoService.getYourInfo()
    }
}
