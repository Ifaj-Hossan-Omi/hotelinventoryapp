import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // async function bootstrap(){
  //   const app = await NestFactory.create(AppModule);
  //   await app.listen(3000);
  // }
