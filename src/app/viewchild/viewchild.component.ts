import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  replaceableText = 'This text can be replaced'
  @ViewChild('textInput', { static: true }) textInput: ElementRef;

  onInput() {
    const newText = this.textInput.nativeElement.value;
    if (newText === '') {
      this.replaceableText = 'This text can be replaced'
    } else {
      this.replaceableText = newText;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
