import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BasicModule } from './basic/basic.module';
import { SharedModule } from './shared/shared.module';
import { CasestudyModule } from './casestudy/casestudy.module';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './nasic/counter/counter.component';


@NgModule({
  declarations: [ // components, directives, pipes
    AppComponent, CounterComponent,
  ],
  imports: [ // modules, other modules
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BasicModule,
    CoreModule,
    SharedModule,

  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent] // components
})
export class AppModule {

  constructor() {
    console.log('App module...');
  }
 }
