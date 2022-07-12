import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  buttonIsDisabled = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.buttonIsDisabled = true;
    }, 2000)
  }

}
