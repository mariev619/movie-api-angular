import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Card } from './types';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { AuthenticationService } from './authentication.service';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // URL absolue
  serverUrl = 'https://movie-api.benoithubert.me';
  // chemin relatif sur le serveur
  postsPath = '/movies';

  constructor(
    private http: HttpClient,
    // private authenticationService: AuthenticationService,
    private router: Router
  ) {
    // pas nécessaire si on utilise une fonction fléchée dans catchError() 
    // this.handleError = this.handleError.bind(this);
  }

  // private handleError(error: HttpErrorResponse | string) {
    // TODO: trouver une façon plus élégante
  //   if (typeof error === 'string') {
  //     return throwError(error);
  //   }
  //   let errorMessage = '';
  //   switch (error.status) {
  //     case 0:
  //       errorMessage = 'A network error occurred. Please come back later';
  //       break;
  //     case 400:
  //       errorMessage = 'There are missing or misformated fields.';
  //       break;
  //     case 404:
  //       errorMessage = 'This post does not exist anymore.';
  //       break;
  //     default:
  //       errorMessage = 'An unexpected error occurred.';
  //   }
  //   return throwError(errorMessage);
  // }

  getAllPosts(): Observable<Card[]> {
    return this.http
      .get<Card[]>(
        `${this.serverUrl}${this.postsPath}`
        // `${this.serverUrl}`
      );
  }

  getPost(postId: number): Observable<Card> {
    return this.http
      .get<Card>(
        `${this.serverUrl}${this.postsPath}/${postId}`
        // `${this.serverUrl}/${postId}`
      )
  }
}
