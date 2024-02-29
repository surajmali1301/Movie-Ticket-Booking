import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit{
  constructor(private router: Router,private movieService:MoviesService) {}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(result=>{
      this.movieList=result;
      console.log(this.movieList)
    })
  }
  movieList:any=[]
  getMovies(){
  }
  toMovieDetails(id:number) {
    this.router.navigate(['/movies-Details',id]);
  }
}
