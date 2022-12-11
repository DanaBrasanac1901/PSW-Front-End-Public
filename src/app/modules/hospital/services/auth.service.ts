import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
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
        var logRes=this.http.post<any>(this.apiHost + 'api/Credentials/login', user, { headers: this.headers });
        
        //this.setSession(logRes);
        logRes.pipe(
            shareReplay());
        
        return logRes;
    }
   
    register(user:RegDTO): Observable<any> {
        return this.http.post<any>(this.apiHost + 'api/Credentials/send-activation', user, { headers: this.headers });
    }


    public setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');
      //ovo samo treba da se proveri da li funkcionise
        //localStorage.setItem('currentUser', JSON.stringify(authResult));
        localStorage.setItem('userId', authResult.claims[0].value);
        localStorage.setItem('userFullName', authResult.claims[2].value + ' ' + authResult.claims[3].value);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        console.log("usao u logout");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
