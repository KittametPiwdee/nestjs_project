import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return 'Kittasil Silanon';
  }

  getJson(){
    return {
      name: 'Kittamet',
      lastname: 'Piwdee',
      age: 19,
      version : process.env.API_VERSION,
      password : process.env.PASSWORD,
    }
  }
}
