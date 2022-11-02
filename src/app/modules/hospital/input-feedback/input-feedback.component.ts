import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback.model';

@Component({
  selector: 'input-feedback',
  templateUrl: './input-feedback.component.html',
  styleUrls: ['./input-feedback.component.css']
})
export class InputFeedbackComponent implements OnInit {

  public feedback = new Feedback();
  public name = "";
  public comment = "";

  constructor() { }

  ngOnInit(): void {
  }

  post()  {
    if (this.comment == "") {
      this.invalid();
      return;
    }
    if (this.name == "") {
      this.feedback.visibleToPublic = true;
    } else this.feedback.patient = this.name;
  }

  invalid() {

  }

}
