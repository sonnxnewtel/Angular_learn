import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { NgOnchangeComChildComponent } from './ngOnchange/ng-onchange-com-child/ng-onchange-com-child.component';
import { NgOnchangeComParentComponent } from './ngOnchange/ng-onchange-com-parent/ng-onchange-com-parent.component';
import { FormsModule } from '@angular/forms';

// devExtreme
import { DxTextBoxModule, DxNumberBoxModule } from 'devextreme-angular';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { NgDoCheckComChildComponent } from './ngDoCheck/ng-do-check-com-child/ng-do-check-com-child.component';
import { NgDoCheckComParentComponent } from './ngDoCheck/ng-do-check-com-parent/NgDoCheckComParentComponent';


@NgModule({
  declarations: [


    NgOnchangeComChildComponent,
    NgOnchangeComParentComponent,
    NgOnInitComponent,
    NgDoCheckComChildComponent,
    NgDoCheckComParentComponent,
  ],
  imports: [
    CommonModule,
    LifecycleRoutingModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    FormsModule
  ]
})
export class LifecycleModule { }
