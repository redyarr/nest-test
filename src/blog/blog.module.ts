import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Blog } from '../models/blog';

@Module({
  imports: [SequelizeModule.forFeature([Blog])], // Register the Blog model here
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
