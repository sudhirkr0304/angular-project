import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserstableComponent } from './userstable/userstable.component';
import { UserslistComponent } from './userslist/userslist.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [
  {
    path:"",
    component: UserstableComponent
  },
  {
    path:"user-list",
    component:UserslistComponent
  },
  {
    path:"posts",
    component:PostsComponent
  },
  {
    path: "comments",
    component: CommentsComponent
  },
  {
    path: "albums",
    component: AlbumsComponent
  },
  {
    path:"photos" ,
    component:PhotosComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudyRoutingModule { 


  constructor() {
    console.log('App routing module...');
  }
}
