import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { unescape } from 'querystring';
type FeedBackDeadLine = 'today' | 'days' | 'week' | 'month';
@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css'
})
export class FeedbackCardComponent {
  @Input() type: FeedBackDeadLine | null = null;
}
