import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  @HostBinding('class.red') colorChanged = false;

  @HostListener('click') toggleColor() {
    this.colorChanged = !this.colorChanged;
  }

  constructor() { }

}
