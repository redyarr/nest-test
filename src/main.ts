import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as ejs from 'ejs';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setViewEngine('ejs');
  app.setBaseViewsDir(path.join(__dirname, '..', 'src', 'views')); // Point to the views directory in src
  app.useStaticAssets(path.join(__dirname, '..', 'public')); // Serve static assets from the public directory
  app.engine('ejs', ejs.renderFile);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
