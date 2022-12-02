import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';

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

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {

    this.temp.doctorName=localStorage.getItem('userId'); //This is only made as a way to force Swagger to recognize the model for the dto
                                                        // In reality it SHOULD just send the patientId and not the empty appt but this is the only way i can resolve it currently
    this.appointmentService.getAppointments(this.temp).subscribe(res => {
      console.log(res);
      this.appointments=res;
      this.dataSource.data = this.appointments;
    });
  }

}
