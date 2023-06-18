import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  title = 'All Posts';
  posts:any;

  constructor(private postService : PostsService) {
    console.log('posts created');
  }


  ngOnInit() {
    console.log('users table initalized..');
    this.getAllUsers();
  }

  ngOnDestroy() {

  }


  getAllUsers() {
    
  }
}
