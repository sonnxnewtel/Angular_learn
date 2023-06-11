import { EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input, SimpleChanges, OnChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-com-child',
  templateUrl: './ng-onchange-com-child.component.html',
  styleUrls: ['./ng-onchange-com-child.component.scss']
})
export class NgOnchangeComChildComponent implements OnChanges, OnInit{
  ngOnInit(): void {
    console.log('1234');
  }
  @Input() text:any = {
    text: ''
  };
  @Input() number = 3;

  @Output() objOutput = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change: ', changes);
  }


  funcTest() {
    this.objOutput.emit(this.number);
  }
  
}
