import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { CredentialsService } from './credentials.service';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient, private credentialsService:CredentialsService) {
    }
      
    login(user:User ) {
        var logRes = this.credentialsService.login(user);
        console.log(logRes);
        this.setSession(logRes);
        return logRes.pipe(
            shareReplay());
    }
   


		private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
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