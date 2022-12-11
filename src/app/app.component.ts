import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { AuthService } from './modules/hospital/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalFront';
  public patient: boolean = false;
  constructor(private router: Router, private authService: AuthService) {

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        this.patient = (this.authService.getRole() === "PATIENT");
      }
      if (event instanceof NavigationEnd) {
        this.patient = (this.authService.getRole() === "PATIENT");
      }

      if (event instanceof NavigationError) {
        this.patient = (this.authService.getRole() === "PATIENT");
      }

    });
  }
}
