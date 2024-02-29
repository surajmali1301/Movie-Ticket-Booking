import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class MovieShowService {
  constructor(private _baseService: BaseService) {}

  // listOfShowDates(movie: any) {
  //   return this._baseService.listOfShowDates(movie);
  // }

  // getShowsList(DateMovie: any) {
  //   return this._baseService.getShowsList(DateMovie);
  // }
}
