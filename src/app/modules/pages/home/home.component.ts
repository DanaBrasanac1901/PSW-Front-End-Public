import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/modules/hospital/model/feedback.model';
import { FeedbackService } from 'src/app/modules/hospital/services/feedback.service';

declare function toast(s:string):any;

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
      this.feedbacks = res.filter(feedback => feedback.approved && feedback.visibleToPublic);
      this.dataSource.data = this.feedbacks;
    });
    toast("Nndjckasnc");
  }

  display = false;
  onPress() {
    this.display = !this.display;
  }

  displayUser=false;
  openUser() {
    this.displayUser=true;
  }

  closeUser(){
    this.displayUser=false;
    
  }

  signIn(){
    this.router.navigate(['/login']);
  }
  
  signUp(){
    this.router.navigate(['/register']);
  }

}
