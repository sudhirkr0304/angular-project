import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AngularBasicComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AngularBasicComponent,
    CatalogComponent,
    HomeComponent
  ]
})
export class BasicModule {
  constructor() {
    console.log('basic module loading...');
  }
 }
