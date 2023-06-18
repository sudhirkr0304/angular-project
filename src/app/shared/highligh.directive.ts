import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective {

  constructor( private e: ElementRef) { }

  @HostBinding("style.color")
  color = "green";

  @HostBinding("style.backgroundColor")
  bgColor = "yellow"


  @HostBinding("style.border")
  border = "1px solid black"


  @HostListener("mouseenter")
  mouseenter() {
    this.color="pink"
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.color="red"
  }



}
