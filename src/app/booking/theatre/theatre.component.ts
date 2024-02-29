import { Component } from '@angular/core';
import { MovieSubjectService } from '../../services/movie-subject.service';
import { MovieShowService } from '../../services/movie-show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theatre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theatre.component.html',
  styleUrl: './theatre.component.css',
})
export class TheatreComponent {
  constructor(
    private _Moviesubject: MovieSubjectService,
    private _movieShow: MovieShowService
  ) {
    // this.getMovie();
    // this.getListOfDates(this.movie);
  }

  ngOnInit(): void {
    // this.getListOfDates(this.movie);
  }



  //get list of dates of the selected movie :


  //list of show theathre

  //get list of theatre at a perticular date :
 
  //when click on the theatre :
   
  }
