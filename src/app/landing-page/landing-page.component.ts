import { Component, Renderer2, OnInit } from '@angular/core';
declare function greet(): void;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  // constructor() {
  //   greet(   );
  // }

  // constructor(private renderer: Renderer2) {}


  // ngOnInit() {
  //   const script = this.renderer.createElement('script');
  //   script.src = 'assets/example.js';
  //   script.onload = () => {
  //     greet();
  //   };
  //   this.renderer.appendChild(document.body, script);
  // }
}
