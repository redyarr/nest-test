import { UserService } from './user.service';
import { Controller, Get, Render,Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {}



@Get('signup')
@Render('signup')
signup(){
return {layout : 'layout'}
}



@Post('signup')
async createAccount(@Body() Body:{email:string, password:string,firstName:string,lastName:string}) {
 return this.UserService.createAccount(Body.email, Body.password, Body.firstName, Body.lastName);
  }

}

