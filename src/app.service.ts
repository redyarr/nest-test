import { Injectable, Redirect } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    Redirect('/blog')
    return 'Hello World!';
  }
}
