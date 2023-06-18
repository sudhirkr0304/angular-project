import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http : HttpClient
  ) { }

  private basUrl = 'https://jsonplaceholder.typicode.com/posts/';


  getAllPosts() {
    return this.http.get(this.basUrl);
  }


  getPostByUserId(id:number) {
    return this.http.get(this.basUrl + "?userId=" + id);
  }
}
