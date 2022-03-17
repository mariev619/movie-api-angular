import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Card } from './types';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  serverUrl = 'https://movie-api.benoithubert.me';
  moviePath = '/movies';
  moviesByGenrePath = "?genre=";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAllCards(): Observable<Card[]> {
    return this.http
      .get<Card[]>(
        `${this.serverUrl}${this.moviePath}`
      );
  }

  getCardsByGenre(genre: string): Observable<Card[]>{
    return this.http
      .get<Card[]>(
        `${this.serverUrl}${this.moviePath}${this.moviesByGenrePath}${genre}`
      );
  }

  getCard(cardId: number): Observable<Card> {
    return this.http
      .get<Card>(
        `${this.serverUrl}${this.moviePath}/${cardId}`
      )
  }
}
