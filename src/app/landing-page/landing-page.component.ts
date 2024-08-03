import { CommonModule } from '@angular/common';
import { Component, Renderer2, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
declare function greetAdmin(): void;
declare function greetMember(): void;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = true;
  }

  confirmAdminSignIn() {
    greetAdmin();
  }

  confirmMemberSignIn() {
    greetMember();
    this.router.navigate(['/candidate-card', this.username]);
  }
}
