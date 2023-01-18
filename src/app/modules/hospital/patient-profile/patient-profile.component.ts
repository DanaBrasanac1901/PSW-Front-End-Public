import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { PatientDTO } from '../model/patientDTO.model';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  public patient: PatientDTO;
  public email: string;
  public allergies:string[];
  constructor(private patientService: PatientService, private authService: AuthService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    console.log(this.email);
    this.patientService.getPatientByEmail(this.email).subscribe(res => {
      this.patient = res;
      this.allergies=this.patient.allergies;
      this.allergies=this.allergies.map(allergy=>{return allergy.toLowerCase()});
      console.log(this.allergies);
      console.log(this.patient.name);
  });
}

}
