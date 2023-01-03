import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from '../../../hospital/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public userFullName:any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userFullName = this.authService.getName();
  }

  LogOutClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  HomeClick() {
    this.router.navigate(['/home']);
  }

  AppointmentsClick() {
    this.router.navigate(['/appt-view']);
  }

  ProfileClick() {
    this.router.navigate(['/profile']);
  }

  HealthMessurementsClick() {
    this.router.navigate(['/health-messurements']);
  }
}
