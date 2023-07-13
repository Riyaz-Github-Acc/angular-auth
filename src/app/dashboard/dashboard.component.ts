import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  currentUser: any;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = this.authService.getCurrentUser();
  }

  editUser() {
    this.router.navigate(['/edit-user']);
  }

  deleteUser() {
    const confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      this.authService.deleteUser(this.currentUser.email);
      this.router.navigate(['/register']);
    }
  }
}
