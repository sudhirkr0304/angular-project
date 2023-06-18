import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgcolorDirective {

  constructor(
    private e: ElementRef
  ) { }

  @Input()
  set bgColor(value:string) {
    console.log("in set fdColor:" + value);
    this.e.nativeElement.style.background=value;
  }

}
