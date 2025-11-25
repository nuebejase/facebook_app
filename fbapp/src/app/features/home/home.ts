import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  user: any = null;
   constructor(
      private auth: AuthService,
      private router: Router
    ) {}
    ngOnInit() {
    this.getUser(); // automatically fetch user when component loads
  }

  getUser() {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    this.auth.home(userId).subscribe({
      next: (res) => {
        this.user = res.user; // save user data
      },
      error: (err) => console.error('Error fetching user', err),
    });
  }
  
logoutUser() {
 // Example: after successful login


localStorage.removeItem('userId');

this.router.navigate(['/login']);
}
}
