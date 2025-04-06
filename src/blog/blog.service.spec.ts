import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from './blog.service';


//this is where we define the actual executed code , that was controller in express 
describe('BlogService', () => {
  let service: BlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogService],
    }).compile();

    service = module.get<BlogService>(BlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
