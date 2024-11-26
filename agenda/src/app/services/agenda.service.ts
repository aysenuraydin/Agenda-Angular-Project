
import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { week } from '../models/note.datasource';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  // getWeeks() : Note[] { // 1
  //   return week;
  // }

   getWeeks(): Observable<Note[]>  { //2 Observable ile
    return of(week);
  }

  // private apiMoviesUrl = 'api/days';
  // getWeeks(): Observable<Note[]>  { //3 api le
  //   //return this.http.get<Note[]>(this.apiMoviesUrl);
  //   return of(week);
  // }
}


