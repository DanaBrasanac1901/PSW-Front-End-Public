import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../model/appointment.model';
import { Doctor } from '../../model/doctor.model';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { DoctorService } from '../../services/doctor.service';
import { AppointmentService } from '../../services/appointment.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeSr from '@angular/common/locales/sr-Latn';
registerLocaleData(localeSr, 'sr-Latn');

@Component({
  selector: 'app-shedule-suggestion',
  templateUrl: './shedule-suggestion.component.html',
  styleUrls: ['./shedule-suggestion.component.css']
})
export class SheduleSuggestionComponent implements OnInit {

  @ViewChild('empTbSort') empTbSort = new MatSort();
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

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('sr-Latn');

  ngOnInit(): void {
    let ChangedFormat = this.pipe.transform(this.today, 'YYYY-MM-dd');
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }

  getByDoctor() {
    this.apptService.getWithPriority('DOCTOR',this.appointment).subscribe(res => {
      this.appointments=res;
      this.dataSource.data=this.appointments;
      this.dataSource.sort = this.empTbSort;
      console.log(this.appointments);
    }, error => {
      this.toast.error({detail:"Doctor is busy in that time frame!",duration:2000,summary:''});
      this.showTable=false;
    });
  }

  getByDate(){
    this.apptService.getWithPriority('DATE',this.appointment).subscribe(res => {
      this.appointments=res;
      this.dataSource.data=this.appointments;
      this.dataSource.sort = this.empTbSort;
      this.dataSource.data=this.appointments;

      if(this.appointments.length===0){
        this.toast.error({detail:"There are no available appointments in that period!",duration:2000,summary:''});
        this.showTable=false;
      }
    }, error=>{
      
    });
  }

  send(){
    if (this.checkParameters()) {
      this.appointment.patientId=localStorage.getItem('idByRole');
      if (this.doctorPriority) this.getByDoctor();
      else this.getByDate();
      this.showTable=true;

    }
    else this.toast.error({detail:"Please fill the entire form!",duration:2000,summary:''});    
  }

  checkParameters(): boolean{
    if (this.appointment.doctorId===undefined || this.appointment.doctorId==='') return false;
    if (this.appointment.startDateString===undefined || this.appointment.startDateString==='') return false;
    if (this.appointment.endDateString===undefined || this.appointment.endDateString==='') return false;
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
      this.toast.success({detail:"Your appointment was scheduled!",duration:3000,summary:''});
      this.router.navigate(['/appt-view']);
    },
     error =>{
      this.toast.error({detail:"Something went wrong!",duration:3000,summary:'Please try again.'});   
     });
  }

  goBack(){
    if(this.showTable){
      this.showTable=false;
    } else this.router.navigate(['/appt-view']);

  }
}
