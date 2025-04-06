import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user';

@Module({
   imports: [SequelizeModule.forFeature([User])], // Register the user model here
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
