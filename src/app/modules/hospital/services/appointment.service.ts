import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAppointments(patientId:string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/Appointments/patient/'+patientId, { headers: this.headers });
  }

  getIdealAppointment(appt: any): Observable<any> {
    return this.http.post<Appointment[]>(this.apiHost + 'api/Appointments/regularAppointments', appt, { headers: this.headers });
  }

  getWithPriority(priority: string,appt:Appointment): Observable<any> {
    return this.http.post<Appointment[]>(this.apiHost + 'api/Appointments/suggestions/'+priority,appt, { headers: this.headers });
  }

  scheduleAppointment(appt:any): any {
    return this.http.post<any>(this.apiHost + 'api/Appointments',appt,{ headers: this.headers });
  }
}