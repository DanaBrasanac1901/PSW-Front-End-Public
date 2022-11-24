import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { RegDTO } from '../../hospital/model/regDTO.model';
import { User } from '../../hospital/model/user.model';
import { AuthService } from '../../hospital/services/auth.service';
import { CredentialsService } from '../../hospital/services/credentials.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public user=new RegDTO();
  public allergies=[
    {name:"polen",checked:false},
    {name:"grinje",checked:false}
  ]

  public selectedAllergies:any[]=[];

  public doctors=[
    {name:'doc1'},
    {name:'doc2'}
  ]

  constructor(private toast:NgToastService,private authService:AuthService) { }

  ngOnInit(): void {
    console.log(this.allergies);
  }

  post()  {
    
    if(!this.checkValidity()) return;

    this.authService.register(this.user).subscribe(res => {
      this.toast.success({detail:"Succesfully registered!",summary:'Verification link was sent to your email.',duration:5000});
    });
  }


  checkValidity(){
    if (this.user.email === '' || this.user.adress==='' || this.user.gender==='' || this.user.jmbg==='' || this.user.name==='' || this.user.password==='') {
      this.toast.error({detail:'Required fields are empty!',summary:"Please complete the form.",duration:5000});
      return false;
    }

    
    console.log(this.selectedAllergies);
    if(this.displayAllergies){
      if(this.selectedAllergies.length===0){
        this.toast.error({detail:'No allergies were selected!',summary:"Add allergies, or check 'No allergies'.",duration:5000});
        return false;
      }
    }

    if (isNaN(Number(this.user.jmbg))){
      this.toast.error({detail:'Jmbg contains only numbers!',summary:"Please enter a valid jmbg.",duration:5000});
      return false;
    }
    return true;
  }

  displayAllergies=false;
  showAllergies(){
    this.displayAllergies=true;
  }

  hideAllergies(){
    this.displayAllergies=false;
  }

  addAllergies(){
    this.selectedAllergies=this.allergies.filter(allergy=>allergy.checked);
    console.log(this.selectedAllergies);
  }

}
