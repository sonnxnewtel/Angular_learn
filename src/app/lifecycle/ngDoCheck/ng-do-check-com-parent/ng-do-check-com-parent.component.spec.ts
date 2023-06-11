import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDoCheckComParentComponent } from './NgDoCheckComParentComponent';

describe('NgDoCheckComParentComponent', () => {
  let component: NgDoCheckComParentComponent;
  let fixture: ComponentFixture<NgDoCheckComParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDoCheckComParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDoCheckComParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
