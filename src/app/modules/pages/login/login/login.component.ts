import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/modules/hospital/model/user.model';
import { AuthService } from 'src/app/modules/hospital/services/auth.service';
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
    if (!this.checkValidity()) return;

    this.authService
      .login(this.user)
      .subscribe(response => {
        this.authService.setSession(response);
        let role = this.authService.getRole();
        if (role === 'PATIENT') {
          this.router.navigate(['/patient-home']);
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
