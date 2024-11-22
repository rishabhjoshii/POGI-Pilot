import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
export interface Feedback {
  id: number;
  rating: number;
  comment: string;
  givenBy: {
    name: string;
    designation: string;
    profilePicture: string;
  };
  createdAt: Date;
}
@Component({
  selector: 'app-my-feedbacks',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './my-feedbacks.component.html',
  styleUrl: './my-feedbacks.component.css'
})
export class MyFeedbacksComponent implements OnInit {
  feedbacks: Feedback[] = [
    {
      id: 1,
      rating: 4,
      comment: "Excellent team player and always delivers high-quality work!",
      givenBy: {
        name: "John Smith",
        designation: "Senior Developer",
        profilePicture: "https://i1.sndcdn.com/avatars-000339084123-nag0p1-t240x240.jpg"
      },
      createdAt: new Date('2024-03-15')
    },
    {
      id: 2,
      rating: 3,
      comment: "Great communication skills and reliable performance.",
      givenBy: {
        name: "Sarah Johnson",
        designation: "Project Manager",
        profilePicture: "https://i.pinimg.com/280x280_RS/60/aa/f6/60aaf6de5a1fd948969fb8c5f866c1ee.jpg"
      },
      createdAt: new Date('2024-03-10')
    }
  ];

  getRatingEmoji(rating: number): string {
    switch (rating) {
      case 1: return 'poor.svg';
      case 2: return 'okay.svg';
      case 3: return 'good.svg';
      default: return 'impressive.svg';
    }
  }

  ngOnInit(): void {
    // Here you would typically fetch feedbacks from a service
  }
}
