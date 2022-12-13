import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment.model';
import { Doctor } from '../../model/doctor.model';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { DoctorService } from '../../services/doctor.service';
import { AppointmentService } from '../../services/appointment.service';
import { Router } from '@angular/router';

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

  constructor(private toast:NgToastService, private doctorService:DoctorService,private apptService:AppointmentService, private router: Router) { }

  ngOnInit(): void {

  }

  tryIdeal(){
    this.apptService.getIdealAppointment(this.appointment).subscribe(res => {
      this.appointments=res;
      this.dataSource.data=this.appointments;
      this.toast.success({detail:"Good news! The doctor is available on that date.",duration:5000,summary:'Please choose one of the available options.'});
    },
      error=>{
        this.toast.error({detail:"Unfortunately, the requested appointment is unavailable.",duration:5000,summary:'Please choose one of the available options.'});
        if (this.doctorPriority) this.getByDoctor();
        else this.getByDate();
      });
    this.showTable=true;
    
  }

  getByDoctor() {
    this.apptService.getWithPriority('DOCTOR',this.appointment).subscribe(res => {
      this.appointments=res;
      this.dataSource.data=this.appointments;
    });
  }

  getByDate(){
    this.apptService.getWithPriority('DATE',this.appointment).subscribe(res => {
      this.appointments=res;
      this.dataSource.data=this.appointments;
    });
  }

  send(){
    if (this.checkParameters()) {
      this.appointment.patientId=localStorage.getItem('idByRole');
      this.tryIdeal();

    }
    else this.toast.error({detail:"Please fill the entire form!",duration:5000,summary:''});    
  }

  checkParameters(): boolean{
    if (this.appointment.doctorId===undefined || this.appointment.doctorId==='') return false;
    if (this.appointment.dateString===undefined || this.appointment.dateString==='') return false;
    if (!this.doctorPriority && !this.datePriority) return false;

    return true;
  }

  loadSpecialty(){
    if (this.selectedSpecialty!=''){
      this.doctorService.getBySpecialty(this.selectedSpecialty).subscribe(res => {
        this.doctors=res;
        if (res.length===0) this.toast.error({detail:"There are currently no doctors of the selected specialization!",duration:2000,summary:''});    
      });
    } else {
      this.doctors=[];
    }
  }

  selectAppointment(appt:any){
    this.selectedAppt=appt;
    console.log(appt);
  }

  schedule(){
    this.selectedAppt.patientId=localStorage.getItem('idByRole');
    this.apptService.scheduleAppointment(this.selectedAppt).subscribe(res => {
      this.toast.success({detail:"Your appointment was scheduled!",duration:5000,summary:''});
      this.router.navigate(['/appt-view']);
    },
     error =>{
      this.toast.error({detail:"Something went wrong!",duration:5000,summary:'Please try again.'});   
     });
  }
}
