import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenreService } from '../genre.service';
import { Card, Genre } from '../types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  genres: Genre[] = [];
  @Input() card!: Card;
  @Output() genreSelectedEvent = new EventEmitter<string>();
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenre()
      .subscribe(genres => {
        this.genres = genres;
      });
  }

  genreSelected(genre: string) {
    this.genreSelectedEvent.emit(genre);
  }

}
