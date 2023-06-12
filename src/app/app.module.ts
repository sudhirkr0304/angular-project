import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BasicModule } from './basic/basic.module';



@NgModule({
  declarations: [ // components, directives, pipes
    AppComponent,
  ],
  imports: [ // modules, other modules
    BrowserModule,
    AppRoutingModule,
    BasicModule,
    CoreModule
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
