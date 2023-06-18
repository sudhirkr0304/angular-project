import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserstableService {

  constructor(
    private http : HttpClient
  ) { }

  private basUrl = 'https://jsonplaceholder.typicode.com/users';


  getAllUsers() {
    return this.http.get(this.basUrl);
  }

}
