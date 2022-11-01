import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'
import { Router } from '@angular/router';
import { Feedback } from 'src/app/modules/hospital/model/feedback.model';
import { FeedbackService } from 'src/app/modules/hospital/services/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataSource = new MatTableDataSource<Feedback>();
  public displayedColumns = ['id','patientId'];
  public feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService, private router: Router) {}

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(res => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    })
  }

}
