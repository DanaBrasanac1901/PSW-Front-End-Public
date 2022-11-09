import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BloodBankService {

  
  constructor(private http:HttpClient, private route:ActivatedRoute) { }
  baseUrl="";

  confirmNewbBoodBank(password: string, id:string):Observable<any>{
    this.baseUrl='http://localhost:45488/api/ConfirmBBAccount/' + id;
    console.log(this.baseUrl)
    return this.http.put<any>(this.baseUrl, JSON.stringify(password));

  }
}
