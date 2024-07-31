import { Component, Renderer2, OnInit} from '@angular/core';
declare function greet(): void;

@Component({
  selector: 'app-admin-signin',
  standalone: true,
  imports: [],
  templateUrl: './admin-signin.component.html',
  styleUrl: './admin-signin.component.css'
})
export class AdminSigninComponent implements OnInit {

  private scriptLoaded = false;


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.loadScript();
  }

  private loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/example.js';
    script.onload = () => {
      this.scriptLoaded = true;
    };
    this.renderer.appendChild(document.body, script);
  }

  onSignInClick() {
    console.log("CLICKED");
    if (this.scriptLoaded) {
      (window as any).greet();
    } else {
      console.error("Script not loaded yet");
    }
  }
}
