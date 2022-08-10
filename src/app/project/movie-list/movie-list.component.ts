import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model'
import { Actor } from '../actor.model'
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  
  movies: Movie[] = [];

  actors: Actor[] = [
    new Actor('Bill Murray', 72),
    new Actor('Greta Gerwig', 38)
  ];


  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
