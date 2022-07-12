import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chosenClass = 'plain'

  checkClass(className: string) {
    return className === this.chosenClass ? true : false;
  }

  changeClass(newClass: string) {
    this.chosenClass = newClass;
  }
}
