import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  constructor(private router: Router) {}

  toLogin() {
    this.router.navigate(['/login']);
  }
  toRegister() {
    this.router.navigate(['/register']);
  }
  toMBooking()
  {
     this.router.navigate(['/booking']);
  }
}
