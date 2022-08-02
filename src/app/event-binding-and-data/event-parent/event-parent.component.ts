import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-parent',
  templateUrl: './event-parent.component.html',
  styleUrls: ['./event-parent.component.css']
})
export class EventParentComponent implements OnInit {
  textElements = ['Write text in child and it will be placed here in a new line:'];

  onTextAdded(textData: {text: string}) {
    this.textElements.push(textData.text)
    console.log('I am in the parent and text has been added.')
    console.log(textData.text)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
