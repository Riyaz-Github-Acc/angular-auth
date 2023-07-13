import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  register(userName: string, email: string, password: string): void {
    const user = { userName, email, password };
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser');
    return JSON.parse(user || '{}');
  }

  login(email: string, password: string): boolean {
    const currentUser = this.getCurrentUser();
    return (
      currentUser &&
      currentUser.email === email &&
      currentUser.password === password
    );
  }

  setCurrentUser(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  deleteUser(email: string): void {
    const currentUser = this.getCurrentUser();
    if (currentUser && currentUser.email === email) {
      this.setCurrentUser({});
    }
  }
}
