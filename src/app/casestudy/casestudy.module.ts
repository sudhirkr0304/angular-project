import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserstableComponent } from './userstable/userstable.component';
import { UserslistComponent } from './userslist/userslist.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import {HttpClientModule} from '@angular/common/http';
import { CaseStudyRoutingModule } from './casestudy-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    UserstableComponent,
    UserslistComponent,
    PostsComponent,
    TodosComponent,
    AlbumsComponent,
    PhotosComponent,
    CommentsComponent,
    
  ],
  exports:[
    UsersComponent,
    UserstableComponent,
    UserslistComponent,
    PostsComponent,
    TodosComponent,
    AlbumsComponent,
    PhotosComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CaseStudyRoutingModule
  ]
})
export class CasestudyModule { 

  constructor() {
    console.log('case study module loading...');
  }
}
