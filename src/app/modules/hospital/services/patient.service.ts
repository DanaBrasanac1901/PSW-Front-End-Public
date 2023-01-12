import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctor.model';
import { PatientDTO } from '../model/patientDTO.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiHost + 'api/Patients', { headers: this.headers });
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiHost + 'api/Patients/' + id, { headers: this.headers });
  }

  registerPatient(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Patients/register', user, { headers: this.headers });
  }


  getPatientByEmail(email: string): Observable<PatientDTO> {
    return this.http.get<PatientDTO>(this.apiHost + 'api/Patients/getByEmail/' + email, { headers: this.headers });
  }

  updatePatient(user: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/Patients/' + user.id, user, { headers: this.headers });
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiHost + 'api/Patients/minimal-patients-doctor' , { headers: this.headers });
  }
}
