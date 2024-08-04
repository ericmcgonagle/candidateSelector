import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-candidate-card-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './candidate-card-page.component.html',
  styleUrl: './candidate-card-page.component.css'
})
export class CandidateCardPageComponent implements OnInit {
  memberName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.memberName = params['memberName'];
    });
  }
}
