import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[fgColor]'
})
export class FgcolorDirective {

  constructor(
    private e: ElementRef
  ) { }

  @Input()
  set fgColor(value:string) {
    console.log("in set fdColor:" + value);
    this.e.nativeElement.style.color=value;
  }

}
