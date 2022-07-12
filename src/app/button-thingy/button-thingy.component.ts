import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-thingy',
  templateUrl: './button-thingy.component.html',
  styleUrls: ['./button-thingy.component.css']
})
export class ButtonThingyComponent implements OnInit {
  buttonIsClicked = false;

  onButtonClick() {
    this.buttonIsClicked = !this.buttonIsClicked;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
