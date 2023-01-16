import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Feedback } from '../model/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'input-feedback',
  templateUrl: './input-feedback.component.html',
  styleUrls: ['./input-feedback.component.css']
})
export class InputFeedbackComponent implements OnInit {

  public feedback = new Feedback();


  constructor(private feedbackService: FeedbackService, private toast:NgToastService ) {}

  ngOnInit(): void {
  }

  display = false;
  post()  {
    if (this.feedback.text === '') {
      this.invalid();
      return;
    }
    console.log(this.feedback.text);

    this.feedback.patientId=parseInt(localStorage.getItem('idByRole'));
    console.log(this.feedback.patientId);
    this.feedbackService.createFeedback(this.feedback).subscribe(res => {
      this.display = true;
    });
  }

  invalid() {
    this.toast.error({detail:'Comment cannot be empty',summary:"Please complete the form.",duration:3000});
  }

  close() {
    this.display = false;
  }

}
