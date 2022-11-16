import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
  // skini npm install --save @auth0/angular-jwt
export class AuthService {
    constructor(public jwtHelper: JwtHelperService) { }  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
