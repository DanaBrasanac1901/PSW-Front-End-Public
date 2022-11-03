import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'input-feedback',
  templateUrl: './input-feedback.component.html',
  styleUrls: ['./input-feedback.component.css']
})
export class InputFeedbackComponent implements OnInit {

  public feedback = new Feedback();
  name: string = "";
  comment: string = "";
  isVisible: boolean = false;


  constructor(private feedbackService: FeedbackService ) {}

  ngOnInit(): void {
  }

  display = false;
  post()  {
    if (this.comment == "") {
      this.invalid();
      //return;
    }
    console.log(this.feedback.text);

    this.feedbackService.createFeedback(this.feedback).subscribe(res => {
      this.display = true;
    });
  }

  invalid() {

  }

  close() {
    this.display = false;
  }

}
