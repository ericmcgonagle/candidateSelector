import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CandidateCardPageComponent } from './candidate-card-page/candidate-card-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: '', component: CandidateCardPageComponent }
];
