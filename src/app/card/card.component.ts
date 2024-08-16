import { Component, Input } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

declare const confirmUpvoteClick: (canddiateName: string) => void;
declare const confirmDownvoteClick: (canddiateName: string) => void;

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  isHovered = false;

  onThumbsUpClick() {
    confirmUpvoteClick(this.title);
  }

  onThumbsDownClick() {
    confirmDownvoteClick(this.title);
  }
}
