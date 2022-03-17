import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Card, Genre } from './types';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  serverUrl = 'https://movie-api.benoithubert.me';
  genrePath = '/genres';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAllGenre(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(
        `${this.serverUrl}${this.genrePath}`
      );
  }

  getGenre(genreId: number): Observable<Genre> {
    return this.http
      .get<Genre>(
        `${this.serverUrl}${this.genrePath}/${genreId}`
      )
  }
}
