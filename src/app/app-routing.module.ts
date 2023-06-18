import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic/home/home.component';
import { AngularBasicComponent } from './basic/angular-basic/angular-basic.component';
import { CatalogComponent } from './basic/catalog/catalog.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { NestedComponent } from './basic/nested/nested.component';
import { UserstableComponent } from './casestudy/userstable/userstable.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full'

  },
  {
    path:'nested',
    component: NestedComponent
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
    path:"case-study",
    loadChildren: () =>  import("./casestudy/casestudy.module").then(m => m.CasestudyModule)
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
