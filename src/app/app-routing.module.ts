import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic/home/home.component';
import { AngularBasicComponent } from './basic/angular-basic/angular-basic.component';
import { CatalogComponent } from './basic/catalog/catalog.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full'

  },
  {
    path : 'basic' ,
    component : AngularBasicComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  constructor() {
    console.log('App routing module...');
  }
}
