import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { FgcolorDirective } from 'src/app/shared/fgcolor.directive';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {


  // @ViewChild("heading")
  // private h1:ElementRef<any> 

  @ViewChild("heading")
  header!:ElementRef<any>;


  @ViewChild(CounterComponent)
  counter!:CounterComponent;

  @ViewChild(FgcolorDirective)
  fgColor!:FgcolorDirective

  @ContentChild("content")
  private el!:ElementRef


  constructor() {
    console.log('city contructor ')
  }

  ngOnInit() {
    console.log('city insitialized' + this.header);
  }

  ngOnChanges() {
    console.log('ng changes' + this.header);
  }

  ngAfterViewInit() {
    console.log('ng on view init ' + this.header);

    this.header.nativeElement.style.color="green";
    this.fgColor.fgColor = "magenta";
  }

  increase() {
    this.counter.increase();
  }

  decrease() {
    this.counter.decrease();
  }



}
