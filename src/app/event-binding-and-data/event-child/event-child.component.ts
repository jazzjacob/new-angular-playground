import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css']
})
export class EventChildComponent implements OnInit {
  @Output() textCreated = new EventEmitter<{text: string}>();

  textInput = '';

  onAddText() {
    console.log('Oh hello I am in the onAddText in the child!');
    this.textCreated.emit({ text: this.textInput });
    this.textInput = '';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
