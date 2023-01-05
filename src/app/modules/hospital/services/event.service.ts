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

aggregate(timeStamp:any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/start' ,timeStamp, { headers: this.headers });
  }

backClick(timeStamp:any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/back' ,timeStamp, { headers: this.headers });
  }

nextClick(timeStamp:any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/next' ,timeStamp, { headers: this.headers });
  }
scheduleClick(timeStamp:any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Event/patient/schedule' ,timeStamp, { headers: this.headers });
  }

}