import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  setToken(token: string) {
    return localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: { email: string, password: string }): Observable<string | boolean> {
    if (userInfo.email === 'admin@email.com' && userInfo.password === 'abc123456'
    ) {
      this.setToken('alkjhfu483')
      return of(true)
    }
    return throwError(() => new Error("Login failed"))
  }

  logout(){
    this.router.navigate(['login'])
  }
}

