import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

declare const clearMemberVotes: (memberName: string) => void;

@Component({
  selector: 'app-candidate-card-page',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './candidate-card-page.component.html',
  styleUrl: './candidate-card-page.component.css'
})
export class CandidateCardPageComponent implements OnInit {
  memberName: string = '';

  cards = [
    { title: 'Sid Venkatraman', content: './assets/images/sidHeadshot.jpg' },
    { title: 'Eric McGonagle', content: './assets/images/ericHeadshot.jpg' },
    { title: 'Andrew Lin', content: './assets/images/linHeadshot.jpg' }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.memberName = params['memberName'];
    });
  }

  onClearClick() {
    clearMemberVotes(this.memberName);
  }
}
