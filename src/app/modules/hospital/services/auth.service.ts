import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { RegDTO } from '../model/regDTO.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    apiHost: string = 'http://localhost:16177/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }
      
    login(user:User ): Observable<any> {
        return this.http.post<any>(this.apiHost + 'api/Credentials/login', user, { headers: this.headers });
    }
   
    register(user:RegDTO): Observable<any> {
        return this.http.post<any>(this.apiHost + 'api/Credentials/send-activation', user, { headers: this.headers });
    }


  public setSession(token) {
    //localStorage.setItem('currentUser', JSON.stringify(token));
    localStorage.setItem('role', token.claims[5].value);
    localStorage.setItem('userId', token.claims[0].value);
    localStorage.setItem('idByRole', token.claims[1].value);
    localStorage.setItem('fullName', token.claims[3].value + ' ' + token.claims[4].value);
    localStorage.setItem('email', token.claims[2].value);
    localStorage.setItem("expires_at", token.validTo);
  }

    logout() {
      localStorage.clear();
    }

    public isLoggedIn() {
      var currentDateTime = new Date().toISOString();
      return currentDateTime < this.getExpiration();
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
      return localStorage.getItem("expires_at");
    }

    getRole() {
    return localStorage.getItem("role");
    }

    getIdByRole() {
      return localStorage.getItem("idByRole");
    }

    getUserId() {
      return localStorage.getItem("userId");
    }

    getName() {
      return localStorage.getItem("fullName");
    }
    
    getEmail() {
      return localStorage.getItem("email");
    }
  }

