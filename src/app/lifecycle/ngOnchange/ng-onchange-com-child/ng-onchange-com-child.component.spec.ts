import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangeComChildComponent } from './ng-onchange-com-child.component';

describe('NgOnchangeComChildComponent', () => {
  let component: NgOnchangeComChildComponent;
  let fixture: ComponentFixture<NgOnchangeComChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnchangeComChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnchangeComChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
