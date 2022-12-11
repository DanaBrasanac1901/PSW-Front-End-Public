import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment.model';
import { Doctor } from '../../model/doctor.model';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { DoctorService } from '../../services/doctor.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-shedule-appointment',
  templateUrl: './shedule-appointment.component.html',
  styleUrls: ['./shedule-appointment.component.css']
})
export class SheduleAppointmentComponent implements OnInit {

  public appointment:Appointment=new Appointment();
  public doctors:Doctor[]=[];
  public selectedDoctor:any;

  public appointments: Appointment[] = [];
  public dataSource = new MatTableDataSource<Appointment>();
  public displayedColumns = ['doctorName','date','time','room'];
  public specialties :string[]= ['','Cardiologist','Anesthesiologist','Neurosurgeon'];

  public selectedSpecialty='';
  public doctorPriority=false;
  public datePriority=false;
  withPriority=false;

  constructor(private toast:NgToastService, private doctorService:DoctorService,private apptService:AppointmentService) { }

  ngOnInit(): void {

  }

  tryIdeal(){
    this.apptService.getIdealAppointment(this.appointment).subscribe(res => {
      console.log(res);
      this.appointments=res;
      this.dataSource.data=this.appointments;
    });
    this.withPriority=true;
    
  }

  getByDoctor() {
    this.withPriority=true;

  }

  getByDate(){
    this.withPriority=true;

  }

  send(){
    console.log(this.appointment.startDate);


    if(this.doctorPriority || this.datePriority){
      this.toast.success({detail:"Ideal case!",duration:5000,summary:''});
      console.log(this.appointment.doctorId);
      this.tryIdeal();
    } else {
      this.toast.error({detail:"Please choose the priority!",duration:5000,summary:''});
      return;
    }
    
  }

  loadSpecialty(){
    if (this.selectedSpecialty!=''){
      this.doctorService.getBySpecialty(this.selectedSpecialty).subscribe(res => {
        this.doctors=res;
      });
    } else this.doctors=[];
  }
  changedDoctor(selectedDoctor) {
    console.log(selectedDoctor)
  }

  selectAppointment(appt:any){
    console.log(appt);
  }

  schedule(){

  }
}
