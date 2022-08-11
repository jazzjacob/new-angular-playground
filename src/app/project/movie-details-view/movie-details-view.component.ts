import { Component, OnInit } from '@angular/core';
import { MovieService } from  '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-details-view',
  templateUrl: './movie-details-view.component.html',
  styleUrls: ['./movie-details-view.component.css']
})
export class MovieDetailsViewComponent implements OnInit {
  selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.movieSelected.subscribe(
      (movie: Movie) => {
        this.selectedMovie = movie;
      }
    )
  }

}
