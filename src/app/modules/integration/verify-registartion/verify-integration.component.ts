import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-verify-integration',
  templateUrl: './verify-integration.component.html',
  styleUrls: ['./verify-integration.component.css']
})
export class VerifyIntegrationComponent implements OnInit {
  reactiveForm:FormGroup;
  constructor(private BloodBankService:BloodBankService) { }
  public password="";
  ngOnInit(): void {
    this.reactiveForm= new FormGroup({

      password1: new FormControl("", Validators.required),
      password2: new FormControl("", [Validators.required,this.passwordMatch]),
     




});

  }
    passwordMatch = (control: FormControl): {[key: string]: any} | null => {
    const password = this.reactiveForm?.get('password1')?.value as string;
    const passwordConfirm = control.value as string;
  
    if (password !== passwordConfirm) {
      return {passwordMatch: true};
    }
  
    return null;
  };
  
  onSubmit(){
    console.log("anna");
    this.BloodBankService.confirmNewbBoodBank(this.password)
    .subscribe(
      response=>(
        console.log(response)
      )
    )
  }

}
