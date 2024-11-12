import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastModule, ButtonModule, MessagesModule, RippleModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers: [MessageService]
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  ratingOptions = [
    { value: 'poor', label: 'POOR' },
    { value: 'okay', label: 'OKAY' },
    { value: 'good', label: 'GOOD' },
    { value: 'impressive', label: 'IMPRESSIVE' }
  ];
  messageService = inject(MessageService);
  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.maxLength(100)]
    });
  }
  onRatingChange(rating: string) {
    console.log('Rating changed to:', rating);
    this.feedbackForm.patchValue({ rating });
  }
  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      // Handle form submission here
      this.showSuccessToast();
      this.feedbackForm.reset();
      console.log('Feedback submitted successfully');
    }
  }
  showSuccessToast() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Feedback submitted successfully' });
  }
}
