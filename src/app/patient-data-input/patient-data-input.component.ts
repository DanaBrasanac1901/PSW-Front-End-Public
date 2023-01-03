import { Component, OnInit } from '@angular/core';
import { PatientData } from '../modules/hospital/model/patient-data.model';
import { PatientService } from '../modules/hospital/services/patient.service';
@Component({
  selector: 'app-patient-data-input',
  templateUrl: './patient-data-input.component.html',
  styleUrls: ['./patient-data-input.component.css']
})
export class PatientDataInputComponent implements OnInit {

  public patientData: PatientData;
  public canSubmit: boolean;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {

  }
  submitData(){
    var numberRegEx = "[0-9]{0,3}('\.'[0-9]+)?";
    if(this.patientData.weight.match(numberRegEx) && 
    this.patientData.bloodPressureUpper.match(numberRegEx) && 
    this.patientData.bloodPressureLower.match(numberRegEx) &&
    this.patientData.heartBeat.match(numberRegEx) && 
    this.patientData.temperature.match(numberRegEx) &&
    this.patientData.bloodSugarLevel.match(numberRegEx)){
      alert("Data submited successfully!");
      this.patientService.submitPatientData(this.patientData);  
    }
    else{
      alert("Only decimal number values are allowed as inputs!");
    }
  }
}
