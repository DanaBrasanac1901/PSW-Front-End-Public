import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/modules/hospital/model/user.model';
import { AuthService } from 'src/app/modules/hospital/services/auth.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/modules/hospital/model/patient.model';
import { PatientService } from 'src/app/modules/hospital/services/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user=new User();
  public variable='';
  public patient: Patient;

  constructor(private toast:NgToastService,private router: Router,private authService:AuthService, private patientService:PatientService) { }

  ngOnInit(): void {
  }

  login(){
    if (!this.checkValidity()) return;

    this.authService
      .login(this.user)
      .subscribe(response => {
        this.authService.setSession(response);
        let role = this.authService.getRole();
        let email = this.authService.getEmail();
        if (role === 'PATIENT') {
          this.patientService.getPatientByEmail(email).subscribe(res => {
            this.patient = res;
            if(this.patient.blocked == 'true'){
              this.toast.error({ detail: 'You are blocked!', duration: 5000 });
            }
          });
          this.router.navigate(['/home']);
        } else {
          this.toast.error({ detail: 'There is no patient with this info!', summary: "Please try again.", duration: 5000 });
        }
      },
      error=>{
        this.toast.error({ detail: 'Incorrect email or password!', summary: "Please try again.", duration:5000});
          return;
      });
  }

  checkValidity(){
    if (this.user.email === '' || this.user.password==='') {
      this.toast.error({detail:'Required fields are empty!',summary:"Please complete the form.",duration:5000});
      return false;
    }
    return true;
  }

}
