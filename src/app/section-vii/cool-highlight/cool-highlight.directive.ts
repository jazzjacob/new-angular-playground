import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoolHighlight]'
})
export class CoolHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.fontFamily = 'futura';
    this.elementRef.nativeElement.style.color = 'yellow';
  }
}
