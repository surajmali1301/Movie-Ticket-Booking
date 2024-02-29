import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { BookingComponent } from './booking/booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieHeaderComponent } from './booking/movie-header/movie-header.component';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { TheatreComponent } from './booking/theatre/theatre.component';

export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'movies-Details/:id', component: MovieHeaderComponent },
  { path: 'addEditMovie', component: AddmovieComponent },
  { path: 'theatre', component: TheatreComponent },
];
