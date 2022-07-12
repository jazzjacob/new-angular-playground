import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  color = 'lightgray'

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: string) {
    this.color = color;
  }

}
