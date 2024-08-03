import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CandidateCardPageComponent } from './candidate-card-page/candidate-card-page.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'candidate-card/:memberName', component: CandidateCardPageComponent },
    { path: 'admin-signin', component: AdminSigninComponent}
];
