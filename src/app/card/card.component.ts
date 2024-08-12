import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';

  cards = [
    { title: 'Sid Venkatraman', content: './assets/images/sidHeadshot.jpeg' },
    { title: 'Eric McGonagle', content: './assets/images/ericHeadshot.jpeg' },
    { title: 'Andrew Lin', content: './assets/images/linHeadshot.jpg' }
  ];
}
