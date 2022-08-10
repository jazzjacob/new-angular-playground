import { Component } from '@angular/core';

@Component({
  selector: 'app-section-vii',
  templateUrl: './section-vii.component.html',
  styleUrls: ['./section-vii.component.css']
})
export class SectionViiComponent {
  constructor() { }

  ngOnInit(): void {
  }
  //numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 10;
}
