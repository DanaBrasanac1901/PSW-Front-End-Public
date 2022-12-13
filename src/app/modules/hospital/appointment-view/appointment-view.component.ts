import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements OnInit {

  public appointments: Appointment[] = [];
  public dataSource = new MatTableDataSource<Appointment>();
  public displayedColumns = ['doctorName','date','time','room'];

  public temp: Appointment=new Appointment;

  constructor(private appointmentService: AppointmentService, private router:Router) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments(localStorage.getItem('idByRole')).subscribe(res => {
      console.log(res);
      this.appointments=res;
      this.dataSource.data = this.appointments;
    });
  }

  openSchedule(){
    this.router.navigate(["/schedule-appointment"]);
  }

}
