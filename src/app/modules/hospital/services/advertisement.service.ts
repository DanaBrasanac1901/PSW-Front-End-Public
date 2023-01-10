import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


getAdvertisements(): Observable<string[]> {
    return this.http.get<string[]>(this.apiHost + 'api/Ad' , { headers: this.headers });
  }

}
