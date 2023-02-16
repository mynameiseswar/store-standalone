/* import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 */

import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { APP_ROUTE } from "./app/app.routes";

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(APP_ROUTE),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
}).catch(
  (err) =>{
    console.error(err);
  }
);