import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user';
import { CreationAttributes } from 'sequelize';
@Injectable()
export class UserService {



async createAccount(email: string,password: string,firstName: string,lastName: string) {
User.create({ email, password, firstName, lastName } as CreationAttributes<User>);

}

}