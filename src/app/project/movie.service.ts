import { EventEmitter } from '@angular/core'
import { Movie } from './movie.model';
import { Actor } from './actor.model';

export class MovieService {
  movieSelected = new EventEmitter<Movie>();

  private movies: Movie[] = [
    new Movie('The Grand Budapest Hotel', 'Wes Anderson', 'Bob Yeoman'),
    new Movie('Persona', 'Ingmar Bergman', 'Sven Nykvist')
  ];

  private actors: Actor[] = [
    new Actor('Bill Murray', 72),
    new Actor('Greta Gerwig', 38)
  ];

  getMovies() {
    return this.movies.slice();
  }

  getActors() {
    return this.actors.slice();
  }

  print() {
    console.log('Oh hello there!')
  };
}