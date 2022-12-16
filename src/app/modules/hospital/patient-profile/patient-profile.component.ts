import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  public patient: Patient;
  public email: string;
  public gender: string;
  public bloodType: string;
  constructor(private patientService: PatientService, private authService: AuthService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    console.log(this.email);
    this.patientService.getPatientByEmail(this.email).subscribe(res => {
      this.patient = res;
      console.log(this.patient);
      if(this.patient.bloodType == 0){
        this.bloodType = 'A';
      }
      else if(this.patient.bloodType == 1){
        this.bloodType = 'B';
      }
      else if(this.patient.bloodType == 2){
        this.bloodType = 'AB';
      }
      else if(this.patient.bloodType == 3){
        this.bloodType = '0';
      }

      if(this.patient.gender == 0){
        this.gender = "male";
      }
      else{
        this.gender = "female";
      }
    });
  }

}
