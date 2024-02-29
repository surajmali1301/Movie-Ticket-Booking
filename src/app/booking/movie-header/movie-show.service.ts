import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Movie } from './movieDTO';

@Injectable({
  providedIn: 'root',
})
export class MovieShowService {
  url = 'http://localhost:8080/movies/';
  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'getallmovies');
  }

  getMovieDetails(id: any): Observable<any> {
    // const url1 = `${this.url}/${id}`;
    return this.http
      .get<any>(this.url+"getById/"+id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
