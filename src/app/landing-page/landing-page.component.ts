import { CommonModule } from '@angular/common';
import { Component, Renderer2, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
declare function greetAdmin(): void;
declare function greetMember(): void;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  // username: string = '';
  // password: string = '';
  showPassword: boolean = false;

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['']
    });
  }

  togglePassword() {
    this.showPassword = true;
    this.loginForm.get('password')?.setValidators([Validators.required]);
    this.loginForm.get('password')?.updateValueAndValidity();
  }

  confirmAdminSignIn() {
    greetAdmin();
  }

  confirmMemberSignIn() {
    if (this.loginForm.valid) {
      greetMember();
      const username = this.loginForm.value.username;
      this.router.navigate(['/candidate-card', username]);
    } else {
      console.log("invalid form");
    }
  }
}
