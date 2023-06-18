import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe } from './gender.pipe';
import { FgcolorDirective } from './fgcolor.directive';
import { BgcolorDirective } from './bgcolor.directive';
import { ShowDirective } from './show.directive';
import { HideDirective } from './hide.directive';
import { HighlighDirective } from './highligh.directive';



@NgModule({
  declarations: [
    GenderPipe,
    FgcolorDirective,
    BgcolorDirective,
    ShowDirective,
    HideDirective,
    HighlighDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenderPipe,
    FgcolorDirective,
    BgcolorDirective,
    ShowDirective,
    HideDirective,
    HighlighDirective
  ]
})
export class SharedModule { }
