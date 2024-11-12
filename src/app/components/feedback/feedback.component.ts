import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers: []
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  showThankYouMessage = false;
  ratingOptions = [
    { value: 'poor', label: 'POOR' },
    { value: 'okay', label: 'OKAY' },
    { value: 'good', label: 'GOOD' },
    { value: 'impressive', label: 'IMPRESSIVE' }
  ];

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.maxLength(50)]
    });
  }
  onRatingChange(rating: string) {
    console.log('Rating changed to:', rating);
    this.feedbackForm.patchValue({ rating });
  }
  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Feedback submitted:', this.feedbackForm.value);
      // Handle form submission here
      this.showThankYouMessage = true;
      this.feedbackForm.reset();
      console.log('Feedback submitted successfully');
    }
  }

  // startNewFeedback() {
  //   this.showThankYouMessage = false;
  //   this.feedbackForm.reset();
  // }
}
