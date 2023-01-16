import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

startClick(): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/start ', { headers: this.headers });
  }

backClick(): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/back' , { headers: this.headers });
  }

nextClick(): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/next' , { headers: this.headers });
  }
scheduleClick(): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/schedule' , { headers: this.headers });
  }

}