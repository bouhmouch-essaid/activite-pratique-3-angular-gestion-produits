import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return of(true);
    } else {
      this.isAuthenticated = false;
      return of(false);
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
