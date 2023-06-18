import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {


  name = "Bihar"

  @Input()
  countryName = 'A'

  @Output()
  stateChanged = new EventEmitter<string>();

  sendStateName() {
    this.stateChanged.emit(this.name);
  }

}
