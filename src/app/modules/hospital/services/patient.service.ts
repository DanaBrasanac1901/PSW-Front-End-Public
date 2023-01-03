import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctor.model';
import { PatientData } from '../model/patient-data.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiHost + 'api/patients', { headers: this.headers });
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiHost + 'api/patients/' + id, { headers: this.headers });
  }

  deletePatient(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/patients/' + id, { headers: this.headers });
  }

  registerPatient(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Patients/register', user, { headers: this.headers });
  }

  loginPatient(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/patients/login', user, { headers: this.headers });
  }

  getPatientByEmail(email: string): Observable<Patient> {
    return this.http.get<Patient>(this.apiHost + 'api/patients/getPatientByEmail/' + email, { headers: this.headers });
  }

  updatePatient(user: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/patients/' + user.id, user, { headers: this.headers });
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiHost + 'api/patients/minimal-patients-doctor' , { headers: this.headers });
  }

  submitPatientData(patientData: any): Observable<any> {
    return this.http.post<PatientData>(this.apiHost + 'api/patients/submitPatientData', patientData, { headers: this.headers });
  }
}
