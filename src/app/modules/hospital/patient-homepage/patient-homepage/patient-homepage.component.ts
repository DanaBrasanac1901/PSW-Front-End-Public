import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Feedback } from '../../model/feedback.model';
import { FeedbackService } from '../../services/feedback.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-patient-homepage',
  templateUrl: './patient-homepage.component.html',
  styleUrls: ['./patient-homepage.component.css']
})
export class PatientHomepageComponent implements OnInit {

  public dataSource = new MatTableDataSource<Feedback>();
  public displayedColumns = ['id','patientId'];
  public feedbacks: Feedback[] = [];
  public userFullName:any;

  constructor(private router: Router, private authService: AuthService, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(res => {
      this.feedbacks = res.filter(feedback => feedback.approved && feedback.visibleToPublic);
      this.dataSource.data = this.feedbacks;
    });
    this.userFullName=localStorage.getItem('userName');
    var userClaims=JSON.parse(localStorage.getItem('userClaims'));
    console.log(userClaims[0]);
  }

  patientHome(){
    this.router.navigate(['/patient-home']);
  }

  logOut(){
    this.authService.logout();
  }
  display = false;
  onPress() {
    this.display = !this.display;
  }
}
