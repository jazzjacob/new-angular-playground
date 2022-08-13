import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSecretPageButtonClick() {
    this.router.navigate(['/secret-page']);
  }

}
