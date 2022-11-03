import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  
  constructor(private http:HttpClient, private route:ActivatedRoute) { }
  baseUrl='http://localhost:45488/api/ConfirmBBAccount/' + this.route.snapshot.params['id'];

  confirmNewbBoodBank(password: string):Observable<any>{
    console.log(this.baseUrl)
    return this.http.put<any>(this.baseUrl, password);

  }
}
