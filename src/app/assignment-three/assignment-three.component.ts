import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textIsVisible = false;
  buttonClicks: Number[] = [];

  buttonClicked() {
    this.textIsVisible = !this.textIsVisible;
    this.buttonClicks.push(this.buttonClicks.length + 1);
    console.log(this.buttonClicks)
  }
}
