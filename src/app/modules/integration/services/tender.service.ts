import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tender } from '../models/tender.model';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  apiHost: string = 'https://localhost:44335/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tender[]> {
    return this.http.get<Tender[]>(this.apiHost + 'api/tenders', { headers: this.headers });
  }
  create(tndr:Tender): Observable<Tender[]> {
    return this.http.post<Tender[]>(this.apiHost + 'api/tenders',tndr, {headers: this.headers});
  }
  getTender(id:number): Observable<Tender> {
    return this.http.get<Tender>(this.apiHost + 'api/tenders/'+id, { headers: this.headers });
  }

}
