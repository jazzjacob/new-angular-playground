import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movieList = [
    {
      title: 'Grand budapest',
      director: 'Wes Anderson'
    },
    {
      title: 'School of Rock',
      director: 'Richard Linklater'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
