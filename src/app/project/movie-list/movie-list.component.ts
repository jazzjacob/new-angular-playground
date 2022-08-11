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

  selectedMovie: Movie;
  selectedActor: Actor;
  
  movies: Movie[] = [];
  actors: Actor[] = [];

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
    this.movieService.movieSelected.emit(movie);
    console.log('Movie selected ')
    console.log(movie)
  }


  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.actors = this.movieService.getActors();
  }

}
