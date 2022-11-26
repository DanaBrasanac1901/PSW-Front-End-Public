import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/modules/hospital/model/user.model';
import { AuthService } from 'src/app/modules/hospital/services/auth.service';
import { CredentialsService } from 'src/app/modules/hospital/services/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user=new User();
  public variable='';

  constructor(private toast:NgToastService,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(!this.checkValidity()) return;

    this.user.role='PATIENT';
    this.authService
      .login(this.user)
      .subscribe(response => {
        
        localStorage.setItem('userClaims', response.claims);
        localStorage.setItem('userId', response.claims[0].value);
        localStorage.setItem('userFullName', response.claims[2].value+' '+response.claims[3].value);
        this.router.navigate(['/patient-home']);
      },
      error=>{
        this.toast.error({detail:'Incorrect email or password!', duration:5000});
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
