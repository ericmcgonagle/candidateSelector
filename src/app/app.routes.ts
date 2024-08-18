import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CandidateCardPageComponent } from './candidate-card-page/candidate-card-page.component';
import { CardComponent } from './card/card.component'
import { AdminPageComponent } from './admin-page/admin-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'card-component', component: CardComponent },
    { path: 'candidate-card/:memberName', component: CandidateCardPageComponent },
    { path: 'admin-page', component: AdminPageComponent}
];
