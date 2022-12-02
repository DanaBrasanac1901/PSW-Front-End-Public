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

  getAppointments(appt: Appointment): Observable<Appointment[]> {
    // This SHOULD be just a get, but since swagger is being a bastard i have to do it this way
    return this.http.post<Appointment[]>(this.apiHost + 'api/Appointments/patient',appt, { headers: this.headers });
  }
}