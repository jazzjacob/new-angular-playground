import { Movie } from './movie.model';

export class MovieService {
  private movies: Movie[] = [
    new Movie('The Grand Budapest Hotel', 'Wes Anderson', 'Bob Yeoman')
  ];

  getMovies() {
    return this.movies.slice();
  }

  print() {
    console.log('Oh hello there!')
  };
}