import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model'
import { Actor } from '../actor.model'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [
    new Movie('The Grand Budapest Hotel', 'Wes Anderson', 'Bob Yeoman')
  ];

  actors: Actor[] = [
    new Actor('Bill Murray', 72),
    new Actor('Greta Gerwig', 38)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
