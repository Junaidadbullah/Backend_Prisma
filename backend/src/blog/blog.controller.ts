import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get()
  getAllBlogs() {
    return this.blogService.getAllBlogs();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    console.log('id = ', id);
    return this.blogService.getBlogById(+id);
  }

  @Post()
  saveRecord(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    console.log('Title = ' + title + ' Description = ' + description);
    return this.blogService.saverecord(title, description);
  }
}
