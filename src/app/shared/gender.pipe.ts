import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value:number): string {
    if(value == 1) {
      return 'Male';
    }
    else if(value == 2) {
      return 'Female';
    }
    else {
      return 'Not Disclosed';
    }
  }

}
