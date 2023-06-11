import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDoCheckComChildComponent } from './ng-do-check-com-child.component';

describe('NgDoCheckComChildComponent', () => {
  let component: NgDoCheckComChildComponent;
  let fixture: ComponentFixture<NgDoCheckComChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDoCheckComChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDoCheckComChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
