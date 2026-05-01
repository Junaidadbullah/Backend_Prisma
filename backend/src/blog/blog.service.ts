import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  getAllBlogs() {
    return 'This action returns frm the service ';
  }

  getBlogById(id: number) {
    return `This action returns a blog by this id ${id}`;
  }

  saverecord(title: string, description: string) {
    return `${title}  + ${description}`;
  }
}
