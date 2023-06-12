import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.css']
})
export class AngularBasicComponent {

  title = 'Welcome to angular traing';
  colors  = [ 'RED' , 'GREEN' , 'BLUE', 'MAGENTA'];
  day = 1;
  min = 1;
  max = 8;
  show = true;
  hide = false;
  employee = 
    {
      id : 101,
      name : 'Sudhir Kumar',
      salary : 1000.45645445,
      doj : Date(),
      pan : 'fkupk5260h',
      mobile: '1234567655',
      isMarried : false,
      gender: 'Male',
      city : 'Bengaluru'
    };


    showHide() {
      if(this.hide == false) {
        this.hide = true;
      }
      else {
        this.hide = false;
      }
    }


}
