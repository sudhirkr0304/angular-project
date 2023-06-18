import { Component } from '@angular/core';
import { UserstableService } from '../userstable.service';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent {

  title = 'All Users';
  users:any;

  constructor(private userService : UserstableService) {
    console.log('users table created');
  }


  ngOnInit() {
    console.log('users table initalized..');
    this.getAllUsers();
  }

  ngOnDestroy() {

  }


  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    } );
  }

}
