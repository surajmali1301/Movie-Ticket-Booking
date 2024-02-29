import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieSubjectService {
  baseUrl = 'http://localhost:8080/movies/'; // Replace this with your backend API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `${this.baseUrl}/data`; // Adjust the endpoint based on your backend API
    return this.http.get(url);
}
}
