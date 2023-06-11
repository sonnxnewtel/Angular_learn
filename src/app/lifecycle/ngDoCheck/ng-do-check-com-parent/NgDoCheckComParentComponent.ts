import { DoCheck, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-do-check-com-parent',
  templateUrl: './ng-do-check-com-parent.component.html',
  styleUrls: ['./ng-do-check-com-parent.component.scss']
})
export class NgDoCheckComParentComponent implements DoCheck, OnInit, OnChanges {
  ngOnInit(): void {
    console.log(123);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(234);
    
  }
  text: string = '';


  ngDoCheck(): void {
    console.log(345);
  }

}
