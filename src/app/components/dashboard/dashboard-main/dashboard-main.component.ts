import { Component } from '@angular/core';
import { FeedbackCardComponent } from '../../feedback-card/feedback-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [FeedbackCardComponent, RouterModule],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css'
})
export class DashboardMainComponent {

}
