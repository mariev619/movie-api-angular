import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../types';
import { PostService } from '../post.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  cards: Card[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts()
      .subscribe(cards => {
        this.cards = cards;
      });
  }
}
