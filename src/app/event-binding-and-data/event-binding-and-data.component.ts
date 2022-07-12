import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-and-data',
  templateUrl: './event-binding-and-data.component.html',
  styleUrls: ['./event-binding-and-data.component.css']
})
export class EventBindingAndDataComponent implements OnInit {

  textOutput = 'Your text will replace this'

  updateOutput(event: any) {
    this.textOutput = event.target.value;
    if (event.target.value === '') {
      this.textOutput = 'Your text will replace this'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
