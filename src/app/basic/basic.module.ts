import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';

import { NestedComponent } from './nested/nested.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { SharedModule } from '../shared/shared.module';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    HomeComponent,
    AngularBasicComponent,
    CatalogComponent,
    NestedComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    NestedComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AngularBasicComponent,
    CatalogComponent,
    NestedComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    NestedComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    CounterComponent
  ]
})
export class BasicModule {
  constructor() {
    console.log('basic module loading...');
  }
 }
