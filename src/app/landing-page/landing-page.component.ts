import { Component, Renderer2, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare function greet(): void;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  username: string = '';

  // private scriptLoaded = false;


  // constructor(private renderer: Renderer2) { }

  // ngOnInit() {
  //   this.loadScript();
  // }

  // private loadScript() {
  //   const script = this.renderer.createElement('script');
  //   script.src = 'assets/example.js';
  //   script.onload = () => {
  //     this.scriptLoaded = true;
  //   };
  //   this.renderer.appendChild(document.body, script);
  // }

  // onSignInClick() {
  //   console.log("CLICKED");
  //   if (this.scriptLoaded) {
  //     (window as any).greet();
  //   } else {
  //     console.error("Script not loaded yet");
  //   }
  // }
}
