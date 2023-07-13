import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  user: any;
  userName: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getCurrentUser();
    this.userName = this.user.userName;
    this.email = this.user.email;
    this.password = this.user.password;
  }

  saveChanges() {
    this.user.userName = this.userName;
    this.email = this.user.email;
    this.password = this.user.password;
    this.authService.setCurrentUser(this.user);
    this.router.navigate(['/dashboard']);
  }
}
