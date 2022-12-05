import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/hospital/services/auth.service';
import decode from 'jwt-decode';
//npm install--save jwt - decode


@Injectable()
export class RoleGuardService implements CanActivate {


  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = 'PATIENT';
    const tokenRole = localStorage.getItem('role');
    //kad sredimo expiration stavicu i uslov za istek tokena
    //if (!this.auth.isLoggedIn() )

    if (tokenRole !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
