import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective {

  constructor(
    private t: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) { }


  @Input()
  set show(value:boolean) {
    console.log('in set hide');
    if(!value) {
      this.vcr.createEmbeddedView(this.t);
    }
    else {
      this.vcr.clear();
    }
  }

}
