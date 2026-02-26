import { Injectable } from '@nestjs/common';

@Injectable()
export class YourinfoService {

    getYourInfo() {
        return {
            name: 'Kittamet Piwdee',
            age: 19,
            hobby: 'coding'
        }
    }
}
