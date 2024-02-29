import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieSubjectService } from '../services/movie-subject.service';
import { MovieShowService } from '../services/movie-show.service';
import { TheatreComponent } from "./theatre/theatre.component";
import { MovieHeaderComponent } from "./movie-header/movie-header.component";


@Component({
    selector: 'app-booking',
    standalone: true,
    templateUrl: './booking.component.html',
    styleUrl: './booking.component.css',
    imports: [CommonModule, TheatreComponent, MovieHeaderComponent]
})
export class BookingComponent {
  constructor(
    private _Moviesubject: MovieSubjectService,
    private _movieShow: MovieShowService
  ) {
    // this.getMovie();
  }

  // ngOnInit(): void {
  //   console.log('In Movie Theathre ' + this.movie.title);
  // }

  movie: any;
  // getMovie() {
  //   this._Moviesubject.selectedMovie.subscribe((data:any) => {
  //     this.movie = data;
  //   });
  // }

  // showDates: any;
  // getListOfDates(movie: any) {
  //   this._movieShow.listOfShowDates(movie).subscribe(
  //     (dates:any) => {
  //       this.showDates = dates;
  //       this._Moviesubject.DatesOfMovieShow.next(dates);
  //       console.log(dates);
  //     },
  //     (error:any) => {
  //       console.log('error : ' + error + ' Cant get the Movies...');
  //     }
  //   );
  // }
}
