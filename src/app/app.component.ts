import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviesComponent } from './movies/movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent,
    BookingComponent,
    RegisterComponent,
    HomepageComponent,
    MoviesComponent,
  ],
})
export class AppComponent {
  title = 'BookMyShow';
}
