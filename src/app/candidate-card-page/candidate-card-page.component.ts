import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
// import { fetchCandidates } from '../../assets/apiService.js';


declare const clearMemberVotes: (memberName: string) => void;
declare const submitMemberVotes: (memberName: string) => void;
declare const fetchCandidates: (url: string) => Promise<any>;

@Component({
  selector: 'app-candidate-card-page',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './candidate-card-page.component.html',
  styleUrl: './candidate-card-page.component.css'
})
export class CandidateCardPageComponent implements OnInit {
  data: any;
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

  onSubmitClick() {
    // submitMemberVotes(this.memberName);
    this.loadData();
  }

  async loadData() {
    try {
      const apiUrl = 'https://oiej3kh0l8.execute-api.us-east-1.amazonaws.com/prod/candidate';
      this.data = await fetchCandidates(apiUrl);
      console.log('Data loaded successfully', this.data);
    } catch (error) {
      console.error('Error loading data', error);
    }
  }
}
