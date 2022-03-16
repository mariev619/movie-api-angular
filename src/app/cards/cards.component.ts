import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Card } from '../types';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() card!: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
