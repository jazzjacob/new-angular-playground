import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() gameHasStartedEmitter = new EventEmitter<boolean>();

  gameIsInSession = false;
  gameHasStarted = false;

  interval: any;
  numberCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
   this.interval = window.setInterval(() => {
      this.intervalFired.emit(this.numberCount + 1);
      this.numberCount++;
    }, 1000);

    this.gameHasStartedEmitter.emit(true);
    this.gameIsInSession = true;
    this.gameHasStarted = true;
  }

  onPauseGame() {
    clearInterval(this.interval);
    this.gameIsInSession = false;
  }

  onEndGame() {
    clearInterval(this.interval);
    this.gameIsInSession = false;
    this.gameHasStartedEmitter.emit(false);
    this.gameHasStarted = false;
  }

}
