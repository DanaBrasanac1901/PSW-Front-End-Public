import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/hospital/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user=new User();
  public variable='';

  constructor() { }

  ngOnInit(): void {
  }

}
