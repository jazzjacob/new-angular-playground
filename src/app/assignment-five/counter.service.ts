import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: number = 0;

  constructor() { }
  test() {
    //console.log('Counter service works!');
  }

  onAction() {
    this.counter++;
    console.log('Number of actions made: ' + this.counter);
  }
}
