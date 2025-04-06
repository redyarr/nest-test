import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from '../models/blog';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class BlogService {

constructor(
    @InjectModel(Blog)
    private readonly blogModel: typeof Blog,
) {}




async getBlogs(): Promise<Blog[]>{

    return this.blogModel.findAll();

}
    


async createBlog(title: string, content: string): Promise<Blog> {

    return this.blogModel.create({ title, content } as CreationAttributes<Blog>);


}

}