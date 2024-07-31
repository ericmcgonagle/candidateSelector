import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CandidateCardPageComponent } from './candidate-card-page/candidate-card-page.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, CandidateCardPageComponent, AdminSigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CandidateSelectorWebsite';
}
