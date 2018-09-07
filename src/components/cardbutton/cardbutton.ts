import { Component, Input,OnInit  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

/**
 * Generated class for the CardbuttonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardbutton',
  templateUrl: 'cardbutton.html',
  animations: [
    trigger('buttonState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(0.9)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class CardbuttonComponent implements OnInit {
  @Input() iconType: string;
  state = 'inactive';

  constructor() {
  }

  ngOnInit(){
  }

  toggleState() {
    this.state = 'active';
    setTimeout(() => {
      this.state = 'inactive';
    },50)
  }

}
