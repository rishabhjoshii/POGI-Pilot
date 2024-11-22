import { Component } from '@angular/core';
import { FeedbackCardComponent } from '../../feedback-card/feedback-card.component';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [FeedbackCardComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css'
})
export class DashboardMainComponent {

}
