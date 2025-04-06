import { Controller, Get, Render,Post, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators/http/route-params.decorator';

//this is where we define the routes , http requests and the data to return to the ejs pages 
@Controller('blog')
export class BlogController  {

constructor(private blogService: BlogService) {}
@Get()
async getBlogs(@Res() res: Response) {
  try {
    const blogs = await this.blogService.getBlogs(); // Await the data
    console.log("Blogs data:", blogs); // Debugging output
    console.log("Is blogs an array?", Array.isArray(blogs)); // Should be true

    res.render('blogs', { blogs ,layout : 'layout'}); // Pass blogs to EJS
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("Internal Server Error");
  }
}

@Get('create')
@Render('blogsform')
getBlogForm() {
    return { layout: 'layout' };
}


@Post('/create')

createBlog(@Body() body:{title:string, content:string}) {

return this.blogService.createBlog(body.title, body.content);

}


}

