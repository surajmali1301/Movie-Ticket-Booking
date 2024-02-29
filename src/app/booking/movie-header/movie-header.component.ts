import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { MoviesService } from '../../movies/movies.service';
import { MovieShowService } from './movie-show.service';
import { Movie } from './movieDTO';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-movie-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-header.component.html',
  styleUrl: './movie-header.component.css',
})
export class MovieHeaderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieShowService
  ) {}
  movieList: any;
  movieId!: number;
  ngOnInit(): void {
    // let id = 0;
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadDetails(id);
    });
    // this.movieList=this.movieService.getMovieDetails(id)
    // console.log(this.movieList);
  }
  loadDetails(id: any): void {
    this.movieService.getMovieDetails(id).subscribe(
      (result: any) => {
        console.log(result);
        this.movieList = result;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

  toTheatre() {
    this.router.navigate(['/theatre']);
  }
}
