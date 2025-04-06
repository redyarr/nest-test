import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Replace with your MySQL username
      password: '12123Redyar', // Replace with your MySQL password
      database: 'nest', // Replace with your database name
      autoLoadModels: true,
      synchronize: true, // Set to false in production
    }),
    BlogModule,
    UserModule, // BlogModule already provides BlogService
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
