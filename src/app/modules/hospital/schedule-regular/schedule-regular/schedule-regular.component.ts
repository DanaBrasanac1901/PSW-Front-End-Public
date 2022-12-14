import { Component, OnInit ,ViewChild} from '@angular/core';
import { Appointment } from '../../model/appointment.model';
import { Doctor } from '../../model/doctor.model';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from '../../services/doctor.service';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { AppointmentService } from '../../services/appointment.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-schedule-regular',
  templateUrl: './schedule-regular.component.html',
  styleUrls: ['./schedule-regular.component.css']
})
export class ScheduleRegularComponent implements OnInit {

  @ViewChild('empTbSort') empTbSort = new MatSort();
  public appointment:Appointment=new Appointment();
  public doctors:Doctor[]=[];
  public selectedDoctor:any;

  public appointments: Appointment[] = [];
  public dataSource = new MatTableDataSource<Appointment>();
  public displayedColumns = ['doctorName','date','time','room'];
  public specialties :string[]= ['','Cardiologist','Anesthesiologist','Neurosurgeon'];

  public selectedSpecialty='';
  showTable=false;
  public todayDate;
  public selectedAppt;

  constructor(private doctorService:DoctorService,
              private toast:NgToastService,
              private apptService:AppointmentService,
              private router:Router,
              private datePipe:DatePipe) { }

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');

  ngOnInit(): void {
    let ChangedFormat = this.pipe.transform(this.today, 'YYYY-MM-dd');
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
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

  send(){
    if (this.checkParameters()) {
      this.appointment.patientId=localStorage.getItem('idByRole');
      
      this.apptService.getIdealAppointment(this.appointment).subscribe(res => {
        this.appointments=res;
        this.dataSource.data=this.appointments;
        this.dataSource.sort = this.empTbSort;
        this.toast.success({detail:"Good news! The doctor is available on that date.",duration:2000,summary:''});
        this.showTable=true;
      },
        error=>{
          this.toast.error({detail:"Doctor is unavailable on that date! Please try with suggestions.",duration:2000,summary:''});
          this.router.navigate(['/schedule-suggestion'])
        });

    }
    else this.toast.error({detail:"Please fill the entire form!",duration:2000,summary:''});    
  }

  checkParameters(): boolean{
    if (this.appointment.doctorId===undefined || this.appointment.doctorId==='') return false;
    if (this.appointment.dateString===undefined || this.appointment.dateString==='') return false;

    return true;
  }

  selectAppointment(appt:any){
    this.selectedAppt=appt;
    console.log(appt);
  }

}
