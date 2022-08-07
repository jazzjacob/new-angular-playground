import { Directive, HostBinding, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextStyling]'
})
export class TextStylingDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor: string = 'transparent';
  @Input() hightlightColor: string = 'dodgerblue';

  constructor() { }
  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
