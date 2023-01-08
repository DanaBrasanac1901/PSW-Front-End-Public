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
import { EventService } from '../../services/event.service';

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
              private eventService:EventService,
              private router:Router,
              private datePipe:DatePipe) { }

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');

  ngOnInit(): void {

    this.eventService.startClick(Date.now()).subscribe(res => {
      console.log(res);
    });
    let ChangedFormat = this.pipe.transform(this.today, 'YYYY-MM-dd');
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }

  loadSpecialty(){
    console.log(this.selectedSpecialty);
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
    //var currentTimeInSeconds=Math.floor(Date.now()/1000); 
    this.eventService.scheduleClick(Date.now()).subscribe(res => {
      console.log(res);
    });

    this.selectedAppt.patientId=localStorage.getItem('idByRole');
    this.apptService.checkIfAvailable(this.selectedAppt).subscribe(res => {
      //ako je odgovor 200 Ok onda nastavi
    }, error =>{
      this.toast.error({detail:"Appointment is no longer available!",duration:3000,summary:'Please try again.'});  
      this.showTable=false; 
      return;
    });


    this.apptService.scheduleAppointment(this.selectedAppt).subscribe(res => {
      this.toast.success({detail:"Your appointment was scheduled!",duration:3000,summary:''});
      this.router.navigate(['/appt-view']);
    },
     error =>{
      this.toast.error({detail:"Something went wrong!",duration:3000,summary:'Please try again.'});   
     });
  }

  send(){

    //var currentTimeInSeconds=Math.floor(Date.now()/1000); 
    this.eventService.nextClick(Date.now()).subscribe(res => {
      console.log(res);
    });
    
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

  goBack(){

    if(this.showTable){
      this.showTable=false;
      //var currentTimeInSeconds=Math.floor(Date.now()/1000); 

      this.eventService.backClick(Date.now()).subscribe(res => {
        console.log(res);
      });
    } else this.router.navigate(['/appt-view']);

  }

}
