import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-com-parent',
  templateUrl: './ng-onchange-com-parent.component.html',
  styleUrls: ['./ng-onchange-com-parent.component.scss']
})
export class NgOnchangeComParentComponent {
  obj = {
    text: ''
  };

  number = 1;

  handleOutput(event) {
    this.number = parseInt(event) + 1;
  }

}
