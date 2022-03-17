import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../types';
import { CardService } from '../card.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getAllCards()
      .subscribe(cards => {
        this.cards = cards;
      });
  }

  genreSelected(genre: string) {
    this.cardService.getCardsByGenre(genre)
      .subscribe(cards => {
        this.cards = cards;
      });
  }
}
