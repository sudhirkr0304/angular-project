import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[show]'
})
export class ShowDirective {

  constructor(
    private t: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) { }


  @Input()
  set show(value:boolean) {
    if(value) {
      this.vcr.createEmbeddedView(this.t);
    }
    else {
      this.vcr.clear();
    }
  }

}
