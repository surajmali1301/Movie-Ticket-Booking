import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = 'http://localhost:8080/movies/';
  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'getallmovies');
  }
}
