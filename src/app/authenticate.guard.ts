import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot, ): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem("username") !== null) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
