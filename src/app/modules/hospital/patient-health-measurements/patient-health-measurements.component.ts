import { Component, OnInit } from '@angular/core';
import { PatientHealthMeasurements } from '../model/patient-health-measurements.model';
import { PatientService } from '../services/patient.service';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-health-measurements',
  templateUrl: './patient-health-measurements.component.html',
  styleUrls: ['./patient-health-measurements.component.css']
})
export class PatientHealthMeasurementsComponent implements OnInit {

  public healthMeasurements: PatientHealthMeasurements = new PatientHealthMeasurements();

  constructor(private patientService: PatientService, private authService: AuthService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form: NgForm){
    this.healthMeasurements.patientId = this.authService.getIdByRole();
    this.healthMeasurements.weight = form.value.weight;
    this.healthMeasurements.bloodPressureUpper = form.value.upperBloodPressure;
    this.healthMeasurements.bloodPressureLower = form.value.lowerBloodPressure;
    this.healthMeasurements.heartbeat = form.value.heartbeat;
    this.healthMeasurements.temperature = form.value.temperature;
    this.healthMeasurements.bloodSugarLevel = form.value.bloodSugarLevel;
    this.patientService.submitPatientHealthMeasurements(this.healthMeasurements).subscribe(
      res => {
        alert("Data successfully submitted.");
        form.reset();
      },
      error => {
        alert("There was an error with submitting your data.");
      }
    )
  }
}
