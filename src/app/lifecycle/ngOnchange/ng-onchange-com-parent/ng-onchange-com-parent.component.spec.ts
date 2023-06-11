import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangeComParentComponent } from './ng-onchange-com-parent.component';

describe('NgOnchangeComParentComponent', () => {
  let component: NgOnchangeComParentComponent;
  let fixture: ComponentFixture<NgOnchangeComParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnchangeComParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnchangeComParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
