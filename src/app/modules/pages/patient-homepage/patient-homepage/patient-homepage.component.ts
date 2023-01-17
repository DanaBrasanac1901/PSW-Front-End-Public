import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/hospital/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Feedback } from 'src/app/modules/hospital/model/feedback.model';
import { FeedbackService } from 'src/app/modules/hospital/services/feedback.service';
import { User } from 'src/app/modules/hospital/model/user.model';

@Component({
  selector: 'app-patient-homepage',
  templateUrl: './patient-homepage.component.html',
  styleUrls: ['./patient-homepage.component.css']
})
export class PatientHomepageComponent implements OnInit {

  public dataSource = new MatTableDataSource<Feedback>();
  public displayedColumns = ['patientName','comment'];
  public feedbacks: Feedback[] = [];
  public userFullName:any;

  constructor(private router: Router, private authService: AuthService, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(res => {
      this.feedbacks = res.filter(feedback => feedback.approved && feedback.visibleToPublic);
      this.feedbacks.forEach(feedback=>{if(feedback.anonymous) {
        feedback.patientName="Anonymous";
        feedback.patientSurname='';
        }
      });
      this.dataSource.data = this.feedbacks;
    });
    this.userFullName=this.authService.getName();
    
  }

  display = false;
  onPress() {
    this.display = !this.display;
  }
}
