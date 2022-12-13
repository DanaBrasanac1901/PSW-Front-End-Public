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
  showTable=false;

  public selectedAppt;

  constructor(private toast:NgToastService, private doctorService:DoctorService,private apptService:AppointmentService) { }

  ngOnInit(): void {

  }

  tryIdeal(){
    this.apptService.getIdealAppointment(this.appointment).subscribe(res => {
      console.log(res);
      this.appointments=res;
      this.dataSource.data=this.appointments;
    });

    if (this.appointments.length===0 || this.appointments===undefined){
      console.log("nema idealnih");
      if (this.doctorPriority) this.getByDoctor();
      else this.getByDate();
    }
    this.showTable=true;
    
  }

  getByDoctor() {
    this.apptService.getWithPriority('DOCTOR',this.appointment).subscribe(res => {
      console.log(res);
      this.appointments=res;
      this.dataSource.data=this.appointments;
    });
  }

  getByDate(){
    this.apptService.getWithPriority('DATE',this.appointment).subscribe(res => {
      console.log(res);
      this.appointments=res;
      this.dataSource.data=this.appointments;
    });
  }

  send(){
    if (this.checkParameters()) {
      this.appointment.patientId=localStorage.getItem('patientId');
      this.tryIdeal();

    }
    else this.toast.error({detail:"Please fill the entire form!",duration:5000,summary:''});    
  }

  checkParameters(): boolean{
    if (this.appointment.doctorId===undefined || this.appointment.doctorId==='') {
      console.log("puca doktor");
      return false;
    }
    if (this.appointment.dateString===undefined || this.appointment.dateString==='') {
      console.log("puca datum");
      return false;
    }
    if (!this.doctorPriority && !this.datePriority) {
      console.log("puca prioritet");
      return false;
    }

    return true;
  }

  loadSpecialty(){
    if (this.selectedSpecialty!=''){
      this.doctorService.getBySpecialty(this.selectedSpecialty).subscribe(res => {
        this.doctors=res;
      });
    } else this.doctors=[];
  }

  selectAppointment(appt:any){
    this.selectedAppt=appt;
    console.log(appt);
  }

  schedule(){
    this.selectedAppt.patientId=localStorage.getItem('idByRole');
    this.apptService.scheduleAppointment(this.selectedAppt).subscribe(res => {
      console.log(res);
    });
  }
}
