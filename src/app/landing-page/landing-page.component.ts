import { CommonModule } from '@angular/common';
import { Component, Renderer2, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare function greet(): void;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = true;
  }

  confirmSignIn() {
    greet();
  }
}
