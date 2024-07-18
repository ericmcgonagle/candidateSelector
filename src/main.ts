import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LandingPageComponent } from './app/landing-page/landing-page.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
