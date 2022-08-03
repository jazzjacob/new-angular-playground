import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css']
})
export class AssignmentFourComponent implements OnInit {
  gameHasStarted = false;

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }

  onGameHasStartedEmitter(inputBoolean: boolean) {
    if (inputBoolean === false) {
      this.oddNumbers = [];
      this.evenNumbers = []; 
    }
    this.gameHasStarted = inputBoolean;
    console.dir(inputBoolean);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
