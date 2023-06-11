import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgOnchangeComParentComponent } from './ngOnchange/ng-onchange-com-parent/ng-onchange-com-parent.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { NgDoCheckComParentComponent } from './ngDoCheck/ng-do-check-com-parent/NgDoCheckComParentComponent';

const routes: Routes = [
  {
    path: 'ngOnchange',
    component: NgOnchangeComParentComponent,
  },
  {
    path: 'ngOnInit',
    component: NgOnInitComponent,
  },
  {
    path: 'ngDoCheck',
    component: NgDoCheckComParentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleRoutingModule { }
