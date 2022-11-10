import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public user=new User();
  constructor(private toast:NgToastService,private userService:UserService) { }

  ngOnInit(): void {
  }

  post()  {
    
    if(!this.checkValidity()) return;

    this.userService.registerUser(this.user).subscribe(res => {
      this.toast.success({detail:"Succesfully registered!",summary:'Verification link was sent to your email.',duration:5000});
    });
  }


  checkValidity(){
    if (this.user.email === '' || this.user.adress==='' || this.user.gender==='' || this.user.jmbg==='' || this.user.name==='' || this.user.password==='') {
      this.toast.error({detail:'Required fields are empty!',summary:"Please complete the form.",duration:5000});
      return false;
    }

    if (isNaN(Number(this.user.jmbg))){
      this.toast.error({detail:'Jmbg contains only numbers!',summary:"Please enter a valid jmbg.",duration:5000});

    }
    return true;
  }

}
